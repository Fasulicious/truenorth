import startDB from './db'
import app from './app'
import migrate from './utils/migrate'
import logger from './utils/logger'

const log = logger.getLogger();

(async () => {
  await startDB()
  log.info('MongoDB connected')
  await migrate()
  log.info('Data loaded')
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => log.info(`Server listening on port ${PORT}`))
})()
