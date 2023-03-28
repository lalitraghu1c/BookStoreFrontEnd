import axios from 'axios'

const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}

export const LoginApi = (loginObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44328/api/User/UserLogin',loginObj)
    console.log("after")
    return response
}

export const SignUpApi = (SignUpObj) => {
    console.log("before")
    const response = axios.post('https://localhost:44328/api/User/UserRegistration',SignUpObj)
    console.log("after")
    return response
}

export const ForgotPasswordApi = (ForgotObj) => {
    console.log("before")
    console.log(ForgotObj)
    const response = axios.post(`https://localhost:44328/api/User/ForgotPassword?email=${ForgotObj}`)
    console.log("after")
    return response
}

export const ResetPasswordApi = (ResetObj) => {
    console.log("before")
    const response = axios.put('https://localhost:44328/api/User/ResetPassword',ResetObj,HeaderConfig)
    console.log("after")
    return response
}