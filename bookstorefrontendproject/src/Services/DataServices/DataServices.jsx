import axios from 'axios'

const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem('token')}`}
}

// Book API

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

// Cart API

export const AddToCart=(data)=>{
    console.log("before")
    const response=axios.post('https://localhost:44328/api/Cart/AddToCart', data, HeaderConfig)
    console.log("after")
    return response
}

export const GetAllCart=()=>{
    console.log("before")
    const response=axios.get('https://localhost:44328/api/Cart/GetCartByUserId', HeaderConfig)
    console.log("after")
    return response
}

export const Removefromcart=(CartId)=>{
    console.log("before")
    const response=axios.delete(`https://localhost:44328/api/Cart/DeleteCart?cartId=${CartId}`,HeaderConfig)
    console.log("after")
    return response
}

// Wishlist API

export const AddToWishlistAPI =(bookId) => {
    console.log("before")
    let response = axios.post(`https://localhost:44328/api/Wishlist/AddToWishList?Book_Id=${bookId}`,null, HeaderConfig)
    console.log("after")
    return response
}

export const DeleteWishlistAPI =(wishListId) => {
    console.log("before")
    let response = axios.delete(`https://localhost:44328/api/Wishlist/RemoveWishList?WishListId=${wishListId}`, HeaderConfig)
    console.log("after")
    return response
}

export const GetWishlistAPI =() => {
    console.log("before")
    let response = axios.get('https://localhost:44328/api/Wishlist/GetWishList', HeaderConfig)
    console.log("after")
    return response
}
