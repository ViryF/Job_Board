const { Router } = require('express')
const router = Router()
const { jobPostController } = require('../controllers')

// post routes
router.post('/post', jobPostController.createJobPost)

// get routes
router.get('/', jobPostController.getAllJobPosts)
// router.get('/:employerid', jobPostController.getJobPostsByEmployer)

// update routes
router.put('/:id', jobPostController.updateJobPostById)

// delete routes
router.delete('/:id', jobPostController.deleteJobPostById)

module.exports = router