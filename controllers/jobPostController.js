const { JobPost, Employer } = require('../models')

const createJobPost = async (req,res) => {
  try{
    let employerId = req.body.employer
    const jobPost = await new JobPost(req.body)
    await jobPost.save()
    const employer = await Employer.findById(employerId)
    employer.jobPosts.push(jobPost._id)
    await Employer.findByIdAndUpdate(employerId, employer)
    
    return res.status(201).json({
      jobPost,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllJobPosts = async (req,res) => {
  try {
    let employerId = req.body.employer
    const jobPosts = await JobPost.find(employerId)
    return res.status(200).json(jobPosts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getJobPostsByEmployer = async (req,res) => {
  try {
    // let compan = req.params._id
    const allPosts = await Employer.findOne({companyName: req.body.companyName }).populate('jobPosts').exec((err, jobPosts) => {
      console.log("Populated Employer " + jobPosts)
    })
    return res.status(200).json(allPosts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}




module.exports = {
  createJobPost,
  getAllJobPosts,
  getJobPostsByEmployer
}