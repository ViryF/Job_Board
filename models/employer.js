const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employerSchema = new Schema(
  {
    // profilePicture: { type: String, required: true }, 
    email: { type: String, required: true }, 
    companyName: { type: String, required: true }, 
    // passwordDigest: { type: String, required: true },
    jobPosts: [{ type: Schema.Types.ObjectId, ref:'JobPost', required: false }]
  },
  { timestamps: true }
)

module.exports = employerSchema