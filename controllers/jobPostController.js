const { JobPost, Employer } = require('../models')
// const employerSchema = require('../models/employer')
// const jobPostSchema = require('../models/jobPost')

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
//     let companyName = req.body.companyName
//     const allPosts = await Employer.findOne({ companyName: companyName }).populate('JobPost').exec((err, JobPost) => {
//       console.log("Populated Employer " + JobPost)
//     })
//     return res.status(200).json(allPosts)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

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

const deleteJobPostById = async (req,res) => { //This function works to delete a jobPost by ID, but still does not remove it from the Employer array as reference. 
  try {
    const { id } = req.params
    const deleted = await JobPost.findByIdAndDelete(id)
    if (deleted) {
      employerSchema.pre('update', function(next) {
        this.model('employers').update(
          { },
          { "$pull": { "jobPosts": this.id } },
          { "multi": true },
          next
        )
      })
      return res.status(200).send('Job post deleted!')
    }
    throw new Error('Post not found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const deleteJobPostById = async (req,res) => {
//   try {
//     const { id } = req.params
//     const jobPost = await jobPostSchema.findByIdAndDelete(
//       { _id: id },
//       { new: true }
//     )
//     await employerSchema.update(
//       { "jobPosts": id },
//       { "$pull": { "jobPosts": id } }
//     )
//     await employerSchema.remove({ "_id": })
//   } catch (error) {
    
//   }
// }

module.exports = {
  createJobPost,
  getAllJobPosts,
  // getJobPostsByEmployer,
  updateJobPostById,
  deleteJobPostById
}