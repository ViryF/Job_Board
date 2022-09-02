const Employer = require('../models/employer')

const createEmployer = async (req,res) => {
  try {
    const employer = await new Employer(req.body)
    await employer.save()
    return res.status(201).json({
      employer,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllEmployers = async

const getEmployerById = 

module.exports = {
  createEmployer
}