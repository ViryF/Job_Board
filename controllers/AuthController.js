// const { Employer, Seeker } = require('../models')
// const middleware = require('../middleware')
// const { rawListeners } = require('../models/employer')

// const LoginEmployer = async (req,res) => {
//   const { email, password} = req.body

//   //check for user email
//   const employer = await Employer.findOne({email}) 

//   if(employer && (await bcrypt.compare(password, user.passwordDigest))) {
//     res.json({
//       _id: user.id,
//       companyName: user.companyName,
//       email: user.email
//     })
//   } else {
//     res.status(400)
//     throw new Error('Unauthorized')
//   }
// }

// const LoginEmployer = async (req,res) => {
//   try {
//     const employer = await Employer.findOne({
//       where: { email: req.body.email },
//       raw: true
//       const isMatched = bcrypt.compareSync(req.body.password, passwordDigest)
//     })
//     if (employer && isMatched) {
//       let payload = {
//         id: employer.id,
//         email: employer.email
//       }
//       let token = middleware.createToken(payload)
//       return res.send({ employer: payload, token })
//     }
//     res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
//     // console.log(employer)
//   } catch (error) {
//     throw error
//   }
// }

// const LoginEmployer = async (req,res) => {
//   await Employer.findOne({ email: req.body.email }, (err, foundEmployer) => {
//     const isMatched = bcrypt.compareSync(req.body.password, foundEmployer.password)
//     if (!foundEmployer || !isMatched) {
//       res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
//     }
//     req.session.employer = foundEmployer._id
//     console.log(req.session)
//   })
// }

// const LoginSeeker = async (req,res) => {
//   try {
//     const seeker = await Seeker.findOne({
//       where: { email: req.body.email },
//       raw: true
//     })
//     console.log(seeker)
//     if (seeker && (await middleware.comparePassword(seeker.passwordDigest, req.body.password))) {
//       let payload = {
//         id: seeker.id,
//         email: seeker.email
//       }
//       let token = middleware.createToken(payload)
//       return res.send({ seeker: payload, token })
//     }
//     res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
//   } catch (error) {
//     throw error
//   }
// }

// const RegisterEmployer = async (req,res) => {
//   try {
//     const { email, password, companyName } = req.body
//     let passwordDigest = await middleware.hashPassword(password) //on AUTH lesson, this line should only have the word password in the parenthesis ".hashPassword(password)"
//     const employer = await Employer.create({ email, passwordDigest, companyName })
//     res.send(employer)
//   } catch (error) {
//     throw error
//   }
// }

// const RegisterSeeker = async (req,res) => {
//   try {
//     const { email, password, firstName, lastName } = req.body
//     let passwordDigest = await middleware.hashPassword(password) // on our last project, we added "process.env.SALT_ROUNDS" in the parenthesis along with "password" and it worked. -- THIS ONE WORKED WITH JUST "PASSWORD".
//     const seeker = await Seeker.create({ email, passwordDigest, firstName, lastName})
//     res.send(seeker)
//   } catch (error) {
//     throw error
//   }
// }

// module.exports = {
//   LoginEmployer,
//   LoginSeeker,
//   RegisterEmployer,
//   RegisterSeeker
// }