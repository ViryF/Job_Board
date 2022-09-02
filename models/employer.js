const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employer = new Schema(
  {
    profilePicture: { type: String, required: true }, 
    email: { type: String, required: true }, 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    passwordDigest: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Employer', Employer)