const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employerSchema = new Schema(
  {
    // profilePicture: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, // validate: [isEmail, 'Invalid email'] is this correct syntax for mongo?
    companyName: { type: String, required: true, unique: true }, 
    passwordDigest: { type: String, required: true },
    jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref:'JobPost', required: false }]
  },
  { timestamps: true }
)

module.exports = employerSchema