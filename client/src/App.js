import Feed from './components/Feed';
import Nav from './components/Nav'
import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:3001/api'


function App() {

const initialEmployerSignUpValues = {
  profilePicture: '',
  email: '',
  companyName: '',
  password: '',
  confirmPassword: ''
}

const initialSeekerSignUpValues = {
  profilePicture: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: ''
}

const initialSignInValues = {
  email: '',
  password: ''
}


const [latestJobPosts, setLatestJobPosts] = useState([])
const [jobPosts, setJobPosts] = useState([])
const [selectedJobPost, setSelectedJobPost] = useState(null)
const [user, setUser] = useState(null)
const [employerSignUpValues, setEmployerSignUpValues] = useState(initialEmployerSignUpValues)
const [seekerSignUpValues, setSeekerSignUpValues] = useState(initialSeekerSignUpValues)
const [signInValues, setSignInValues] = useState(initialSignInValues)
const [profileDetails, setProfileDetails] = useState([])
const [authenticated, toggleAuthenticated] = useState(false)

const getLatestJobPosts = async () => {
  const latest = await axios.get(`${BASE_URL}/jobPosts/latest`)
  console.log(latest.data)
  setLatestJobPosts(latest.data)
}

useEffect(() => {
getLatestJobPosts()
},[])

  return (
    <div className="App">
      <header className='App-header'>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Feed latestJobPosts={ latestJobPosts } /> } />
          {/* <Route path="/profile" element={ <Profile /> } />
          <Route path="/jobListings" element={ <JobListings /> } />
          <Route path="/jobListings/:id" element={ <JobDetails /> } /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
