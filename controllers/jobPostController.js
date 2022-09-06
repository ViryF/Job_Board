const { JobPost, Employer } = require('../models')
const { index } = require('../models/seeker')

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

// const getJobPostsByEmployer = async (req,res) => {
//   try {
//     let employerId = req.params._id
//     const employer = await Employer.findOne({ employerId: employerId }).populate('jobPosts')
//     console.log(employer)
//     if (employer) {
//       let details = await JobPost.find(employer)
//       employer.jobPosts
//       return res.status(200).send(details)
//     }
//     // const jobPostDetails = await JobPost.findById({ jobPosts._id })
//     return res.status(200).json(employer)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

// const getJobPostsByEmployer = async (req, res) => {
//   try {
//     const posts = await JobPost.find({ employer: req.params.id})
//     return res.status(200).json(posts)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const updateJobPostById = async (req,res) => {
  try {
    const jobPost = await JobPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(jobPost)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteJobPostById = async (req,res) => {
  try {
    const { id } = req.params
    const deleted = await JobPost.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted) {
      let employer = await Employer.findById(deleted.employer)
      employer.jobPosts.splice(employer.jobPosts.indexOf(deleted._id), 1)
      await Employer.findByIdAndUpdate(deleted.employer, employer)
      return res.status(200).send('Job post deleted!')
    }
    throw new Error('Post not found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createJobPost,
  getAllJobPosts,
  // getJobPostsByEmployer,
  updateJobPostById,
  deleteJobPostById
}