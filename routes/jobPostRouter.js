const { Router } = require('express')
const router = Router()
const { jobPostController } = require('../controllers')

// post routes
router.post('/post', jobPostController.createJobPost)

// get routes
// router.get('/', employerController.getAllEmployers)
// router.get('/:id', employerController.getEmployerById)

// update routes
// router.put('/:id', employerController.updateEmployerById)

// delete routes

// router.delete('/:id', employerController.deleteEmployerById)

module.exports = router