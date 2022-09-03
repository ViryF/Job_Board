const { Router } = require('express')
const router = Router()
const { employerController, authController } = require('../controllers')
const middleware = require('../middleware')

// get routes
router.get('/', employerController.getAllEmployers)
router.get('/:id', employerController.getEmployerById)

// post routes
router.post('/register', authController.RegisterEmployer)
router.post('/new', employerController.createEmployer)

// update routes
router.put('/:id', employerController.updateEmployerById)

// delete routes

router.delete('/:id', employerController.deleteEmployerById)

module.exports = router