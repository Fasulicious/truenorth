import {
  create
} from '../db/queries/log'

export const createLog = (data) => create(data)
