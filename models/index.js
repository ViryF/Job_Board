const mongoose = require('mongoose')
const employerSchema = require('./employer')
const jobPostSchema = require('./jobPost')
const seekerSchema = require('./seeker')


const Employer = mongoose.model('Employer', employerSchema, 'employers')
const JobPost = mongoose.model('JobPost', jobPostSchema, 'posts')
const Seeker = mongoose.model('Seeker', seekerSchema)


module.exports = {
  Employer,
  JobPost,
  Seeker
}