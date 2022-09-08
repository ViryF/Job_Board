import { useState } from "react"
import { RegisterSeeker } from "../services/Auth"
import { useNavigate } from 'react-router-dom'

const RegisterAsSeeker = () => {
  let navigate = useNavigate()

  const initialSeekerFormValues = {
    profilePicture: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  }

  const [seekerFormValues, setSeekerFormValues] = useState(initialSeekerFormValues)

  const handleChange = (e) => {
    setSeekerFormValues({ ...seekerFormValues, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterSeeker({
      profilePicture: seekerFormValues.profilePicture,
      email: seekerFormValues.email,
      firstName: seekerFormValues.firstName,
      lastName: seekerFormValues.lastName,
      password: seekerFormValues.password,
      confirmPassword: seekerFormValues.confirmPassword
    })
    setSeekerFormValues({ initialSeekerFormValues })
    navigate('/login') // navigate to signIn page
  }

  return (
    <div className="seekerName">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} name="email" type="text" placeholder="Enter your email" value={seekerFormValues.email} required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleChange} name="firstName" type="text" placeholder="Enter your first name" value={seekerFormValues.firstName} required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleChange} name="lastName" type="text" placeholder="Enter your last name" value={seekerFormValues.lastName} required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} name="password" type="text" placeholder="Enter your password" value={seekerFormValues.password} required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={handleChange} name="confirmPassword" type="text" placeholder="Confirm your password" value={seekerFormValues.confirmPassword} required />
          </div>
          <button 
          disabled={!seekerFormValues.email || !seekerFormValues.firstName || !seekerFormValues.lastName || (!seekerFormValues.password && seekerFormValues.confirmPassword === seekerFormValues.password)}>Register this Job Seeker</button>
        </form>
      </div>

    </div>
  )
}

export default RegisterAsSeeker