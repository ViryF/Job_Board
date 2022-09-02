const { Router } = require('express')
const router = Router()
const { employerController } = require('../controllers')

router.get('/', employerController.getAllEmployers)
router.get('/:id', employerController.getEmployerById)

module.exports = router