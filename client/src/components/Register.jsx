
import { useState } from "react";
// import { Link } from 'react-router-dom'
import RegisterAsEmployer from '../components/RegisterAsEmployer'
import RegisterAsSeeker from '../components/RegisterAsSeeker'

const Register = () => {
  const [registrationType, setRegistrationType] = useState(false)

  let registration
  let text

  if(!registrationType) {
    registration = <RegisterAsEmployer />
    text = 'Sign up as a Job Seeker instead!'
  } else {
    registration = <RegisterAsSeeker />
    text = 'Sign up as an Employer instead!'
  }
  
  return (
    <div className="registration-page">
    <div className="registration-nav">
      {/* <Link className="registration-links" to="/">Feed</Link> */}
    </div>
    <div className="registration-container">{registration}
    <button className="switchRegistrationType" onClick={()=> {registrationType? setRegistrationType(false):setRegistrationType(true)}}>{text}</button>
    </div>
  </div>
)
}

export default Register