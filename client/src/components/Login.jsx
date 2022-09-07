import { SignInUser } from "../services/Auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()

  const initialLoginValues = {
    email: '',
    password: ''
  }

  const [LoginValues, setLoginValues] = useState(initialLoginValues)

  const handleChange = (e) => {
    setLoginValues({ ...LoginValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(LoginValues)
    setLoginValues({ initialLoginValues })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/profile')
  }

return (
  <div className="login col">
    <div className="card-overlay centered">
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} name="email" type="email" placeholder="email@example.com" value={LoginValues.email} required />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Email</label>
          <input onChange={handleChange} name="password" type="password" placeholder="Enter your password" value={LoginValues.password} required />
        </div>
        <button disabled={!LoginValues.email || !LoginValues.password}>Sign In</button>
      </form>
    </div>
  </div>
)
}

export default Login