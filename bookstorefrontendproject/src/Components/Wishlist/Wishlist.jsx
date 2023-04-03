import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Wishlist/Wishlist.css'
import Header from '../Header/Header'
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteWishlistAPI, GetWishlistAPI } from '../../Services/DataServices/DataServices';
import { useNavigate } from 'react-router-dom'

function Wishlist() {

    const [wishListarray, setWishListArray] = useState([])
    const navigate = useNavigate()
    const gotofrontpage=()=>{
        navigate('/dashboard')
    }

    const deleteWishlist = (wishListId) => {
        console.log('Wishlist Id : ', wishListId)
        DeleteWishlistAPI(wishListId)
            .then((response) => {
                console.log(response.data.data)
                navigate('/wishlist')
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("WishList Removed successfully")
    }

    useEffect(() => {
        GetWishlistAPI()
            .then((response) => {
                console.log(response)
                setWishListArray(response.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className='WishlistContainer'>
            <Header />
            <div className="WishlistMainContainer">
                <div className='BookHomeWishlist'>
                    <div style={{ fontSize: '12px', color: '#9D9D9D' }} className="home4" onClick={gotofrontpage}>Home/</div>
                    <div style={{ fontSize: '12px' }} className="WishlistTitle">My Wishlist</div>
                </div>
            </div>
            <div className="WishlistMiddleSec">
                <div className="DivWishlistTitle">
                    <div className="MyWishlist">My WishList</div>
                </div>
                {
                    wishListarray.map((wishlist) => (
                        <div className="MainWishlistBox">
                            <div className='WishlistImage'>
                                <img style={{ width: '70px', height: '80px' }} src={wishlist.bookImage} />
                            </div>
                            <div className='BookdetailOuterBox'>
                                <div style={{ fontWeight: 700 }}>{wishlist.bookName}</div>
                                <div style={{ color: 'gray', fontSize: '12px' }}>by {wishlist.authorName}</div>
                                <div className="BookPricebox">
                                    <div className='WishlistDiscountPrice'>Rs. {wishlist.discountPrice}</div>
                                    <div className='WishlistOriginalPrice'>Rs. {wishlist.originalPrice}</div>
                                </div>
                            </div>
                            <div className='DeleteIcon'>
                                <DeleteIcon onClick={() => deleteWishlist(wishlist.wishListId)}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Wishlist