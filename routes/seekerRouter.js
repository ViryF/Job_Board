const { Router } = require('express')
const router = Router()
const { seekerController } = require('../controllers')

// get routes

router.get('/', seekerController.getAllSeekers)

// post routes
router.post('/new', seekerController.createSeeker)


// update routes

// delete routes


module.exports = router