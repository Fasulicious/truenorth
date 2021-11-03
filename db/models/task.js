import mongoose, { Schema } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const TaskSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  title: {
    type: String,
    required: true,
    unique: true
  }
})

export default mongoose.model('task', TaskSchema)
