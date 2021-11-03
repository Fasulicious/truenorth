import test from 'ava'
import request from 'supertest'
import app from '../../app'
import startDB from '../../db'
import migrate from '../../utils/migrate'

test.before(async t => {
  await startDB()
  await migrate()
})

test('GET should return an array with N elements', async t => {
  const N = 1
  const response = await request(app.callback()).get(`/tasks?N=${N}`)
  t.is(response.body.length, N)
  t.true(Object.keys(response.body[0]).includes('_id'))
  t.true(Object.keys(response.body[0]).includes('title'))
})

test('PUT should create a log for specific task', async t => {
  const N = 1
  const { body: tasks } = await request(app.callback()).get(`/tasks?N=${N}`)
  const { body: log } = await request(app.callback()).put(`/tasks/${tasks[0].title}`)
  t.like(log, {
    task: tasks[0].title
  })
})
