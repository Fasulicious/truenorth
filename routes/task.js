import Router from 'koa-router'

import {
  countTasks,
  getTasks
} from '../controllers/task'

import {
  createLog
} from '../controllers/log'

const router = new Router({ prefix: '/tasks' })

router.get('/', async ctx => {
  const N = parseInt(ctx.query.N || 3)
  const counter = await countTasks()
  const skip = Math.floor(Math.random() * (counter - N))
  ctx.body = await getTasks({}, skip, N)
  ctx.status = 200
})

router.put('/:task', async ctx => {
  const { task } = ctx.params
  const log = await createLog({
    task
  })
  ctx.body = log
  ctx.status = 201
})

export default router
