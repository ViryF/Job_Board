const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobPostSchema = new Schema(
  {
    title: { type: String, required: true }, 
    description: { type: String, required: true }, 
    requirements: { type: String, required: true }, 
    location: { type: String, required: true },  
    salary: { type: String, required: false },  
    application_url: { type: String, required: true},
    employer: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer' },
    seekers: [{ type: Schema.Types.ObjectId, ref: 'Seeker', required: false }]
  },
  { timestamps: true }
)

module.exports = jobPostSchema