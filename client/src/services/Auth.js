import Client from './api'

// export const SignInUser = async (data) => {
//   try {
//     const res = await Client.post('auth/login', data) // may need to change the route here to match something that works for both employers & seekers.
//     localStorage.setItem('token', res.data.token)
//     return res.data.user
//   } catch (error) {
//     throw error
//   }
// }

// I think that maybe for signing in a seeker and an employer, I may be able to use the same function, since both of them only request an email and password. Check with instructors to be sure. 

export const SignInEmployer = async (data) => {
  try{
    const res = await Client.post('api/employers/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const SignInSeeker = async (data) => {
  try{
    const res = await Client.post('api/seekers/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}



export const RegisterUser = async (data) => { 
  try {
    const res = await Client.post('/auth/register', data) // check this one too
    return res.data
  } catch (error) {
    throw error
  }
}

export const registerEmployer = async (data) => {
  try {
    const res = await Client.post('api/employers/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RegisterSeeker = async (data) => {
  try {
    const res = await Client.post('api/seekers/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async (data) => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session', data) // check this one too
    return res.data
  } catch (error) {
    throw error
  }
}

// export const CheckEmployerSession = async () => {
//   try {
//     // Checks if the current token if it exists is valid
//     const res = await Client.get('api/employers/session', data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

// export const CheckSeekerSession = async () => {
//   try {
//     // Checks if the current token if it exists is valid
//     const res = await Client.get('api/seekers/session', data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }