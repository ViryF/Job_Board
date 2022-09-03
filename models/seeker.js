const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seekerSchema = new Schema(
  {
    // profilePicture: { type: String, required: true }, 
    email: { type: String, required: true }, 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    passwordDigest: { type: String, required: true }, 
    jobPosts: [{ type: Schema.Types.ObjectId, ref: 'JobPost', required: false }]
  },
  { timestamps: true }
)

module.exports = seekerSchema