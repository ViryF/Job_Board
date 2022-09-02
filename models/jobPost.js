const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobPost = new Schema(
  {
    employer_id: { type: Schema.Types.ObjectId, ref: 'Employer', required: true },
    title: { type: String, required: true }, 
    description: { type: String, required: true }, 
    requirements: { type: String, required: true }, 
    location: { type: String, required: true },  
    salary: { type: String, required: true },  
    application_url: { type: String, required: true},
    seeker_id: [{ type: Schema.Types.ObjectId, ref: 'Seeker', required: false }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('JobPost', JobPost)