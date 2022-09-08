import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Feed from './components/Feed';
import Nav from './components/Nav'
import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:3001/api'


function App() {




const [latestJobPosts, setLatestJobPosts] = useState([])
// const [jobPosts, setJobPosts] = useState([])
// const [selectedJobPost, setSelectedJobPost] = useState(null)
// const [profileDetails, setProfileDetails] = useState([])
const [authenticated, toggleAuthenticated] = useState(false)
const [user, setUser] = useState(null)


const getLatestJobPosts = async () => {
  const latest = await axios.get(`${BASE_URL}/jobPosts/latest`)
  console.log(latest.data)
  setLatestJobPosts(latest.data)
}

useEffect(() => {
getLatestJobPosts()
},[])

const handleLogOut = () => {
  setUser(null)
  toggleAuthenticated(false)
  localStorage.clear()
}

  return (
    <div className="App">
      <header className='App-header'>
        <Nav authenticated={authenticated} 
        user={user} 
        handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Feed latestJobPosts={ latestJobPosts } /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login setUser={setUser} toggleAuthenticated={toggleAuthenticated} /> } />
          <Route path="/profile" element={ <Profile user={user} authenticated={authenticated}  /> } />
          {/* <Route path="/jobListings" element={ <JobListings /> } />
          <Route path="/jobListings/:id" element={ <JobDetails /> } />  */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
