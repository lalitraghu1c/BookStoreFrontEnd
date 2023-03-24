import axios from 'axios'

export const LoginApi = (loginObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44328/api/User/UserLogin',loginObj)
    console.log("after")
    return response
}

export const SignUpApi = (SignUnObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44328/api/User/UserRegistration',SignUnObj)
    console.log("after")
    return response
}