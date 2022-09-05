const { Router } = require('express')
const router = Router()
const { employerController } = require('../controllers')
// const middleware = require('../middleware')

// get routes
router.get('/', employerController.getAllEmployers)
router.get('/:id', employerController.getEmployerById)

// post routes
router.post('/login', employerController.LoginEmployer)
router.post('/register', employerController.registerEmployer)
router.post('/new', employerController.createEmployer)

// update routes
router.put('/:id', employerController.updateEmployerById)

// delete routes

router.delete('/:id', employerController.deleteEmployerById)

module.exports = router