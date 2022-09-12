const { Seeker, JobPost, Employer } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = `${process.env.APP_SECRET}`


const registerSeeker = async (req,res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    req.body.passwordDigest = hashedPassword
    const seeker = await Seeker.create(req.body)
    res.send(seeker)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const LoginSeeker = async (req,res) => {
  try {
    const seeker = await Seeker.findOne({email: req.body.email })
    const isMatched = bcrypt.compare(req.body.password, seeker.passwordDigest)

    if(seeker && isMatched) {
      let payload = {
        id: seeker.id,
        email: seeker.email
      }
      let token = jwt.sign(payload, APP_SECRET)
      return res.send({ seeker: payload, token })
    }
  } catch (error) {
    throw error
  }
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

const getUserByEmail = async (req,res) => { 
  try {
    let { email } = req.body
    const seeker = await Seeker.findOne({email: email})
    if(seeker) {
      return res.status(200).send(true)
    } else if (!seeker) {
      const employer = await Employer.findOne({email: email})
      if(employer) {
        return res.status(200).send(false)
      }
    }
    return res.status(404).send('User with the email requested does not exist!')
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

const bookmarkJobPost = async (req,res) => {
  try {
    const { seekerId, jobPostId } = req.params
    const selectedJobPost = await JobPost.findById(jobPostId)
    const currentSeeker = await Seeker.findById(seekerId)
    selectedJobPost.seekers.push(currentSeeker)
    await JobPost.findByIdAndUpdate(jobPostId, selectedJobPost)
    currentSeeker.jobPosts.push(jobPostId)
    await Seeker.findByIdAndUpdate(seekerId, currentSeeker)
    return res.status(201).json({ currentSeeker })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const verifyToken = (req,res,next) => {
  const { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {

      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

const stripToken = (req,res,next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  getUserByEmail,
  registerSeeker,
  LoginSeeker,
  createSeeker,
  getAllSeekers,
  getSeekerById,
  updateSeekerById,
  deleteSeekerById,
  bookmarkJobPost,
  verifyToken,
  stripToken,
  CheckSession
}