const { Employer, Seeker } = require('../models')
const middleware = require('../middleware')

const Login = async (req,res) => {
  try {
    
  } catch (error) {
    throw error
  }
}

const RegisterEmployer = async (req,res) => {
  try {
    const { email, password, companyName } = req.body
    let passwordDigest = await middleware.hashPassword(password) //on AUTH lesson, this line should only have the word password in the parenthesis ".hashPassword(password)"
    const employer = await Employer.create({ email, passwordDigest, companyName })
    res.send(employer)
  } catch (error) {
    throw error
  }
}

const RegisterSeeker = async (req,res) => {
  try {
    const { email, password, firstName, lastName } = req.body
    let passwordDigest = await middleware.hashPassword(password) // on our last project, we added "process.env.SALT_ROUNDS" in the parenthesis along with "password" and it worked. -- THIS ONE WORKED WITH JUST "PASSWORD".
    const seeker = await Seeker.create({ email, passwordDigest, firstName, lastName})
    res.send(seeker)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  RegisterEmployer,
  RegisterSeeker
}