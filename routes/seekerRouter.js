const { Router } = require('express')
const router = Router()
const { seekerController } = require('../controllers')

// get routes

router.get('/', seekerController.stripToken, seekerController.verifyToken, seekerController.getAllSeekers)
router.get('/:id', seekerController.stripToken, seekerController.verifyToken, seekerController.getSeekerById)

// post routes
router.post('/login', seekerController.LoginSeeker)
router.post('/register', seekerController.registerSeeker)
router.post('/new', seekerController.createSeeker)
router.post('/:id', seekerController.stripToken, seekerController.verifyToken, seekerController.bookmarkJobPost)

// update routes
router.put('/:id', seekerController.stripToken, seekerController.verifyToken, seekerController.updateSeekerById)

// delete routes
router.delete('/:id', seekerController.stripToken, seekerController.verifyToken, seekerController.deleteSeekerById)


module.exports = router