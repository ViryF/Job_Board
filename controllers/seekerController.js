const { Seeker } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = `${process.env.APP_SECRET}`


const registerSeeker = async (req,res) => {
  try {
    // const { email, companyName } = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    req.body.passwordDigest = hashedPassword
    const seeker = await Seeker.create(req.body)
    res.send(seeker)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const LoginSeeker = async (req,res) => {
  await Seeker.findOne({ email: req.body.email }, (err, foundSeeker) => {
    const isMatched = bcrypt.compare(req.body.password, foundSeeker.passwordDigest)
    if (!foundSeeker || !isMatched) {
      return res.render({ error: "Unauthorized!"})
    }
    let payload = {
      id: foundSeeker.id,
      email: foundSeeker.email
    }
    let token = jwt.sign(payload, APP_SECRET)
    return res.send({ seeker: payload, token })
  }).clone()
}

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
    let { id } = req.params
    const seeker = await Seeker.findById(id)
    if(seeker) {
      return res.status(200).json({ seeker })
    }
    return res.status(404).send('Seeker with the ID requested does not exist!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateSeekerById = async (req,res) => {
  try {
    const seeker = await Seeker.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(seeker)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteSeekerById = async (req,res) => {
  try {
    const { id } = req.params
    const deleted = await Seeker.findByIdAndDelete(id)
    if(deleted) {
      return res.status(200).send('Seeker deleted!')
    }
    throw new Error ('Seeker not found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const bookmarkJobPost = async (req,res) => {
//   try {
//     const { id } = req.params
//     const bookmarked = await 
//   } catch (error) {
    
//   }
// }

module.exports = {
  registerSeeker,
  LoginSeeker,
  createSeeker,
  getAllSeekers,
  getSeekerById,
  updateSeekerById,
  deleteSeekerById
}