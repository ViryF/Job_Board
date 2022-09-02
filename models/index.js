const {mongoose, model } = require('mongoose')
// const { model } = require('mongoose')
const employerSchema = require('./employer')
const jobPostSchema = require('./jobPost')
const seekerSchema = require('./seeker')


const Employer = mongoose.model('Employer', employerSchema)
const JobPost = mongoose.model('JobPost', jobPostSchema)
const Seeker = mongoose.model('Seeker', seekerSchema)


module.exports = {
  Employer,
  JobPost,
  Seeker
}