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

const getJobPostsByEmployer = async (req,res) => {
  try {
    let employerId = req.params._id
    const employer = await Employer.findOne({ employerId: employerId }).populate('JobPost')
    return res.status(200).json(employer.jobPosts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const getJobPostsByEmployer = async (req,res) => { THIS ONE IS NOT EVEN RECOGNIZING THE EMPLOYER ID FROM THE PARAMS AS AN EXISTING EMPLOYER, EVEN THOUGH IT IS WTF!! 
//   try {
//     const { id } = req.params
//     const employer = await Employer.findById(id)
//     if (employer) {
//       return res.status(200).json({ employer })
//     }
//     return res.status(400).json('Employer with the specified ID does not exist')
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

// NEED TO FIGURE OUT, WHY I CAN'T GET ALL POSTS FOR 1 EMPLOYER AS A JSON OBJECT! BASED ON HOW THE FUNCTION CURRENTLY IS, MAY NEED TO CHANGE ROUTE TO NOT NEED A EMPLOYER-ID.

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
  getJobPostsByEmployer,
  updateJobPostById,
  deleteJobPostById
}