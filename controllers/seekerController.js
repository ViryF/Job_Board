const { Seeker } = require('../models')

const createSeeker = async (req,res) => {
  try{
    const seeker = await new Seeker(req.body)
    await seeker.save()
    return res.status(201).json({ 
      seeker,
    })
  } catch(error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllSeekers = async (req,res) => {
  try {
    const seekers = await Seeker.find()
    return res.status(200).json(seekers)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSeekerById = async (req,res) => {
  try {
    const { id } = req.params
    const seeker = await Seeker.findById(id)
    if(seeker) {
      res.status(200).json(seeker)
    }
    return res.status(404).send('Job skeeker with the ID requested does not exist!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}


module.exports = {
  createSeeker,
  getAllSeekers,
  getSeekerById
}