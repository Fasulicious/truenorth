import test from 'ava'
import startDB from '../../db'
import {
  countTasks,
  getTasks
} from '../../controllers/task'
import Task from '../../db/models/task'
import migrate from '../../utils/migrate'

test.before(async t => {
  await startDB()
})

test.beforeEach(async t => {
  await Task.deleteMany({})
})

test.afterEach(async t => {
  await Task.deleteMany({})
})

test.serial('countTask should return 0 if the collection is empty', async t => {
  const counter = await countTasks()
  t.is(counter, 0)
})

test.serial('getTask should return an array of tasks is exists', async t => {
  await migrate()
  const tasks = await getTasks({}, 0, 1)
  t.true(Object.keys(tasks[0]).includes('_id'))
  t.true(Object.keys(tasks[0]).includes('title'))
})

test.serial('countTasks should return total of tasks in db', async t => {
  await migrate()
  const counter = await countTasks()
  t.is(counter, parseInt(process.env.NUMBER_OF_TITLES))
})
