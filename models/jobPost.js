const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobPostSchema = new Schema(
  {
    employer: { type: Schema.Types.ObjectId, ref: 'Employer', required: true },
    title: { type: String, required: true }, 
    description: { type: String, required: true }, 
    requirements: { type: String, required: true }, 
    location: { type: String, required: true },  
    salary: { type: String, required: true },  
    application_url: { type: String, required: true},
    seekers: [{ type: Schema.Types.ObjectId, ref: 'Seeker', required: false }]
  },
  { timestamps: true }
)

module.exports = jobPostSchema