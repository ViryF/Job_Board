const { Router } = require('express');
const router = Router();
const employerRouter = require('./employerRouter')
const jobPostRouter = require('./jobPostRouter')
const seekerRouter = require('./seekerRouter')


router.get('/', (req, res) => res.send('This is root!'))
router.use('/employers', employerRouter)
router.use('/jobPosts', jobPostRouter)
router.use('/seekers', seekerRouter)


module.exports = router;