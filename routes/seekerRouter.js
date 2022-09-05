const { Router } = require('express')
const router = Router()
const { seekerController } = require('../controllers')
// const middleware = require('../middleware')

// get routes

router.get('/', seekerController.getAllSeekers)
router.get('/:id', seekerController.getSeekerById)

// post routes
// router.post('/login', authController.LoginEmployer)
// router.post('/register', authController.RegisterSeeker)
router.post('/new', seekerController.createSeeker)


// update routes
router.put('/:id', seekerController.updateSeekerById)

// delete routes
router.delete('/:id', seekerController.deleteSeekerById)


module.exports = router