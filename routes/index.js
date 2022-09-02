const { Router } = require('express');
const router = Router();
const employerRouter = require('./employerRouter')
const jobPostRouter = require('./jobPostRouter')
const seekerRouter = require('./seekerRouter')


router.get('/', (req, res) => res.send('This is root!'))
router.use('/employer', employerRouter)
router.use('/jobPost', jobPostRouter)
router.use('/seeker', seekerRouter)


module.exports = router;