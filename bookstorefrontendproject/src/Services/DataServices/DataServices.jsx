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

export const GetBookById=(bookId)=>{
    console.log("before")
    const response=axios.get(`https://localhost:44328/api/Book/GetBookByBookId?bookid=${bookId}`,HeaderConfig)
    console.log("after")
    return response
}