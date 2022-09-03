const { Router } = require('express')
const router = Router()
const { seekerController } = require('../controllers')

// get routes

router.get('/', seekerController.getAllSeekers)
router.get('/:id', seekerController.getSeekerById)

// post routes
router.post('/new', seekerController.createSeeker)


// update routes
router.put('/:id', seekerController.updateSeekerById)

// delete routes


module.exports = router