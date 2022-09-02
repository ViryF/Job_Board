const { Router } = require('express')
const router = Router()
const { employerController } = require('../controllers')

router.get('/', employerController.getAllEmployers)

module.exports = router