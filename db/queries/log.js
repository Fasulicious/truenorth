import Log from '../models/log'
import logger from '../../utils/logger'
import CustomError from '../../utils/custom.error'

const log = logger.getLogger()

export const create = async (data) => {
  try {
    return await Log.create(data)
  } catch (e) {
    log.error('Fail creating logs at:', '/db/queries/log', e)
    throw new CustomError('db_error', 'Database error, try in a few', 500)
  }
}
