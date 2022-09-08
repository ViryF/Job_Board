import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { registerEmployer } from "../services/Auth";

const RegisterAsEmployer = () => {
  let navigate = useNavigate()

  const initialEmployerFormValues = {
    profilePicture: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg',
    email: '',
    companyName: '',
    password: '',
    confirmPassword: ''
  }

  const [employerFormValues, setEmployerFormValues] = useState(initialEmployerFormValues)

  const handleChange = (e) => {
    setEmployerFormValues({...employerFormValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await registerEmployer({
      profilePicture: employerFormValues.profilePicture,
      email: employerFormValues.email,
      companyName: employerFormValues.companyName,
      password: employerFormValues.password,
      confirmPassword: employerFormValues.confirmPassword
    })
    setEmployerFormValues({ initialEmployerFormValues })
    navigate('/login') // navigate to signIn page
  }

return (
  <div className="employerName">
    <div className="card-overlay centered">
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="companyName">Company Name</label>
          <input onChange={handleChange} name="companyName" type="text" placeholder="Enter your company's name" value={employerFormValues.companyName} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} name="email" type="text" placeholder="Enter your email" value={employerFormValues.email} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} name="password" type="text" placeholder="Enter your password" value={employerFormValues.password} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input onChange={handleChange} name="confirmPassword" type="text" placeholder="Confirm your password" value={employerFormValues.confirmPassword} required />
        </div>
        <button
          disabled={!employerFormValues.email || !employerFormValues.companyName || (!employerFormValues.password && employerFormValues.confirmPassword === employerFormValues.password)}
        >Register this Employer</button>
      </form>
    </div>
  </div>
)
}

export default RegisterAsEmployer