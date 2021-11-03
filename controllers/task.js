import {
  get
} from '../db/queries/task'
import Task from '../db/models/task'
import logger from '../utils/logger'

const log = logger.getLogger()

export const countTasks = async () => {
  try {
    return await Task.countDocuments({})
  } catch (e) {
    log.error('Fail getting total of tasks at: ', '/controllers/tasks', e)
    throw new CustomError('db_error', 'Database error, try in a few', 500)
  }
}

export const getTasks = (where, skip, limit) => get(where, skip, limit)
