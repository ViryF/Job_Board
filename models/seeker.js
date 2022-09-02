const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Seeker = new Schema(
  {
    profilePicture: { type: String, required: true }, 
    email: { type: String, required: true }, 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    passwordDigest: { type: String, required: true }, 
    jobPost_id: [{ type: Schema.Types.ObjectId, ref: 'JobPost', required: false }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Seeker', Seeker)