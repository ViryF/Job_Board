const { Seeker } = require('../models')

const createSeeker = async (req,res) => {
  try{
    const seeker = await new Seeker(req.body)
    await seeker.save()
    return res.status(201).json({ 
      seeker })
  } catch(error) {
    return res.status(500).json({ error: error.message })

  }
}

module.exports = {
  createSeeker
}