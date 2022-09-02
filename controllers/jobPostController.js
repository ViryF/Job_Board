const JobPost = require('../models/jobPost')

const createJobPost = async (req,res) => {
  try{
    const jobPost = await new JobPost(req.body)
    await jobPost.save()
    return res.status(201).json({
      jobPost,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createJobPost
}