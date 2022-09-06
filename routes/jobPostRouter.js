const { Router } = require('express')
const router = Router()
const { jobPostController, employerController, seekerController } = require('../controllers')

// post routes
router.post('/post', employerController.stripToken, employerController.verifyToken, jobPostController.createJobPost)

// get routes
router.get('/', seekerController.stripToken, seekerController.verifyToken, jobPostController.getAllJobPosts)
// router.get('/:employerid', jobPostController.getJobPostsByEmployer)

// update routes
router.put('/:id', employerController.stripToken, employerController.verifyToken, jobPostController.updateJobPostById)

// delete routes
router.delete('/:id', employerController.stripToken, employerController.verifyToken, jobPostController.deleteJobPostById)

module.exports = router