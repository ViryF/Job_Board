const { Router } = require('express')
const router = Router()
const { employerController } = require('../controllers')

// get routes
router.get('/', employerController.getAllEmployers)
router.get('/:id', employerController.getEmployerById)

// post routes
router.post('/new', employerController.createEmployer)

// update routes

// delete routes


module.exports = router