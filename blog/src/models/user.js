import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String,
  about:String,
  profileImage:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
