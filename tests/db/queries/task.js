import test from 'ava'
import startDB from '../../../db'
import {
  get
} from '../../../db/queries/task'
import Task from '../../../db/models/task'
import migrate from '../../../utils/migrate'

test.before(async t => {
  await startDB()
})

test.afterEach(async t => {
  await Task.deleteMany({})
})

test.serial('get should return an array of tasks is exists', async t => {
  await migrate()
  const tasks = await get({}, 0, 1)
  t.true(Object.keys(tasks[0]).includes('_id'))
  t.true(Object.keys(tasks[0]).includes('title'))
})
