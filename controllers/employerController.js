const { Employer } = require('../models')

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

const getAllEmployers = async (req,res) => {
  try{
    const employers = await Employer.find()
    return res.status(200).json(employers)
  } catch (error) { 
    return res.status(500).send(error.message)
  }
}

const getEmployerById = async (req,res) => {
  
}

module.exports = {
  createEmployer,
  getAllEmployers
}