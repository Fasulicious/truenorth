import Task from '../db/models/task'
import axios from 'axios'

const {
  NUMBER_OF_TITLES
} = process.env

export default async () => {
  // check if data is already migrated
  if (await Task.countDocuments({}) !== 0) return
  // fetch titles from faker web
  const {
    data: titles
  } = await axios.request({
    method: 'get',
    url: `https://lorem-faker.vercel.app/api?quantity=${NUMBER_OF_TITLES}`
  })
  const mapped = titles.map(el => ({
    title: el
  }))
  await Task.insertMany(mapped)
}
