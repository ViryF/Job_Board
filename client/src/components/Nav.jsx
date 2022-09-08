import { Link } from 'react-router-dom'
import React from 'react'

const Nav = ({ authenticated, user, logOut}) => {
  let isAuthenticated
  if(user) {
    isAuthenticated = (
      <nav>
        <div>
          <div>
            <h4>Super Awesome Job Board</h4>
            <h3>Welcome Back, {user.firstName}!</h3>
            <img className='profilePic' src={user.profilePicture} alt="The user's profile pic" />
            <div>
              <Link to="/" className='links'>Feed</Link>
              <Link to="/profile" className='links'>My Profile</Link>
              <Link to="/settings" className='links'>Settings</Link>
              <Link to="/jobListings" className='links'>All Job Posts</Link>
              <Link to="/chat" className='links'>My Conversations</Link>
              <Link onClick={logOut} to="/" className='links'>Log Out</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  const notAuthenticated = (
    <nav>
      <div>
        <h4>Super Awesome Job Board</h4>
        <Link to="/">Feed</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
  return (
    <header>
      <Link to="/"></Link>
      {authenticated && user ? isAuthenticated : notAuthenticated }
    </header>
  )
}

export default Nav