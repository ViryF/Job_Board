const { Router } = require('express')
const router = Router()
const { jobPostController, employerController, seekerController } = require('../controllers')

// post routes
router.post('/post', employerController.stripToken, employerController.verifyToken, jobPostController.createJobPost)

// get routes
router.get('/', jobPostController.getAllJobPosts) //seekerController.stripToken, seekerController.verifyToken - 
// waiting on the bookmark function to protect this route again




// router.get('/:employerid', jobPostController.getJobPostsByEmployer)

// update routes
router.put('/:id', employerController.stripToken, employerController.verifyToken, jobPostController.updateJobPostById)

// delete routes
router.delete('/:id', jobPostController.deleteJobPostById) // employerController.stripToken, employerController.verifyToken,

module.exports = router