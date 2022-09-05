const { Employer } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = `${process.env.APP_SECRET}`


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

const registerEmployer = async (req,res) => {
  try {
    // const { email, companyName } = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    req.body.passwordDigest = hashedPassword
    const employer = await Employer.create(req.body)
    res.send(employer)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const LoginEmployer = async (req,res) => {
  await Employer.findOne({ email: req.body.email }, (err, foundEmployer) => {
    const isMatched = bcrypt.compare(req.body.password, foundEmployer.passwordDigest)
    if (!foundEmployer || !isMatched) {
      return res.render({ error: "Unauthorized!"})
    }
    let payload = {
      id: foundEmployer.id,
      email: foundEmployer.email
    }
    let token = jwt.sign(payload, APP_SECRET)
    return res.send({ employer: payload, token })
  }).clone()
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
  registerEmployer,
  LoginEmployer,
  getAllEmployers,
  getEmployerById, 
  updateEmployerById,
  deleteEmployerById
}