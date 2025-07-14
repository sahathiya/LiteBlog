import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category:String,
  image:String,
  author: String,
  profileImage:String,
  role:String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
