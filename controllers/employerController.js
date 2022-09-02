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
  try {
    const { id } = req.params
    const employer = await Employer.findById(id)
    if(employer) {
      res.status(200).json({ employer })
    }
    return res.status(404).send('Employer with the ID requested does not exist!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const updateEmployerById = async (req,res) => {
  try {
    const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(employer)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteEmployerById = async (req,res) => {
  try {
    const { id } = req.params
    const deleted = await Employer.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Employer deleted')
    }
    throw new Error('Employer not found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createEmployer,
  getAllEmployers,
  getEmployerById, 
  updateEmployerById,
  deleteEmployerById
}