import Feed from './components/Feed';
import Nav from './components/Nav'
import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';


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


const [jobPosts, setJobPosts] = useState([])
const [selectedJobPost, setSelectedJobPost] = useState(null)
const [topJobPosts, setTopJobPosts] = useState([])
const [user, setUser] = useState(null)
const [employerSignUpValues, setEmployerSignUpValues] = useState(initialEmployerSignUpValues)
const [seekerSignUpValues, setSeekerSignUpValues] = useState(initialSeekerSignUpValues)
const [signInValues, setSignInValues] = useState(initialSignInValues)
const [profileDetails, setProfileDetails] = useState([])
const [authenticated, toggleAuthenticated] = useState(false)



  return (
    <div className="App">
      <header className='App-header'>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Feed topJobPosts={ topJobPosts } /> } />
          {/* <Route path="/profile" element={ <Profile /> } />
          <Route path="/jobListings" element={ <JobListings /> } />
          <Route path="/jobListings/:id" element={ <JobDetails /> } /> */}
        </Routes>
      </main>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
