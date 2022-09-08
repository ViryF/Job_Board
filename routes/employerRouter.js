const { Router } = require('express')
const router = Router()
const { employerController } = require('../controllers')

// get routes
router.get('/', employerController.stripToken, employerController.verifyToken, employerController.getAllEmployers)
router.get('/:id', employerController.stripToken, employerController.verifyToken, employerController.getEmployerById)
router.get('/session', employerController.stripToken, employerController.verifyToken, employerController.CheckSession)

// post routes
router.post('/login', employerController.LoginEmployer)
router.post('/register', employerController.registerEmployer)
router.post('/new', employerController.createEmployer)

// update routes
router.put('/:id', employerController.stripToken, employerController.verifyToken, employerController.updateEmployerById)

// delete routes

router.delete('/:id', employerController.stripToken, employerController.verifyToken, employerController.deleteEmployerById)

module.exports = router