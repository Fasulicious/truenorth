import mongoose, { Schema } from 'mongoose'

const LogSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('log', LogSchema)
