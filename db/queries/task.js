import Task from '../models/task'
import logger from '../../utils/logger'
import CustomError from '../../utils/custom.error'

const log = logger.getLogger()

export const get = async (where, skip, limit) => {
  try {
    return await Task.find(where)
      .skip(skip)
      .limit(limit)
      .lean()
  } catch (e) {
    log.error('Fail getting tasks at: ', '/db/queries/tasks', e)
    throw new CustomError('db_error', 'Database error, try in a few', 500)
  }
}
