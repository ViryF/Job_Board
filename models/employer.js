const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employerSchema = new Schema(
  {
    profilePicture: { type: String, default: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg' }, 
    email: { type: String, required: true, unique: true }, // validate: [isEmail, 'Invalid email'] is this correct syntax for mongo?
    companyName: { type: String, required: true, unique: true }, 
    passwordDigest: { type: String, required: true },
    jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref:'JobPost', required: false }]
  },
  { timestamps: true }
)

module.exports = employerSchema