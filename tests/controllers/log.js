import test from 'ava'
import { v4 as uuidv4 } from 'uuid'
import startDB from '../../db'
import {
  createLog
} from '../../controllers/log'
import Log from '../../db/models/log'

test.before(async t => {
  await startDB()
})

test.after.always(async t => {
  await Log.deleteMany({})
})

test('createLog should create a log in db and return that object', async t => {
  const id = uuidv4()
  const log = await createLog({
    task: id
  })
  t.like(log, {
    task: id
  })
})
