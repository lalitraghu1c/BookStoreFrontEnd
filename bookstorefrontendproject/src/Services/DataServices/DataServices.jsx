import axios from 'axios'

const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem('token')}`}
}


export const GetAllBookApi = () => {
    console.log("before")
    const response = axios.get('https://localhost:44328/api/Book/GetAllBook',HeaderConfig)
    console.log("after")
    return response
}