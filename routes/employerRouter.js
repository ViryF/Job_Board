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

router.delete('/:id', employerController.deleteEmployerById)

module.exports = router