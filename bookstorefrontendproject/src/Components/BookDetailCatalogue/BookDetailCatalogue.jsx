import React, { useEffect, useState } from "react";
import '../BookDetailCatalogue/BookDetailCatalogue.css'
import Header from "../Header/Header";
import { Button, TextField } from "@mui/material";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { AddToCart, AddToWishlistAPI, GetBookById } from "../../Services/DataServices/DataServices";
import { useNavigate } from "react-router-dom";

function BookDetailCatalogue() {
    const [value, setValue] = useState();
    const [bookDetail, setBookDetail] = useState([]);
    const book_Id = JSON.parse(localStorage.getItem("book_Id"));

    //Add to Cart
    const cartobj = { "BookCount": 0, "book_Id": 0 }
    let navigate1=useNavigate();
    const cartlistener = () => {
        cartobj.BookCount = 1
        cartobj.book_Id = Number(localStorage.getItem("book_Id"))
        AddToCart(cartobj)
            .then((response) => {
                console.log(response)
                localStorage.setItem("CartId", response.data.data)
                navigate1('/cart')
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("Add to cart successfully")
    }

    //Add to wishlist API
    const wishListlistener = () => {
        console.log(localStorage.getItem('book_Id'))
        AddToWishlistAPI(localStorage.getItem('book_Id'))
            .then((response) => {
                console.log(response)
                navigate('/wishlist')
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("Added to wishlist successfully")
    }
    //Get all book
    useEffect(() => {
        console.log(bookDetail)
        GetBookById(book_Id)
            .then((response) => {
                console.log(response)
                setBookDetail(response.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    let navigate = useNavigate();
    const navtohome = () => {
        navigate('/dashboard')
    }

    return (
        <div className="BookMainContainer2">
            <Header />
            <div className="Home2">
                <div style={{ color: '#9D9D9D', cursor: 'pointer' }} className="home1" onClick={navtohome}>Home/</div>
                <div className="Title2">Book{bookDetail.bookId}</div>
            </div>
            <div className="BookMiddleContainer2">
                <div className="BookImageContainer2">
                    <div className="BookImage2">
                        <img style={{ width: '80%', height: '80%' }} src={bookDetail.bookImage} alt="" />
                    </div>
                    <div className="BookButton2">
                        <Button onClick={cartlistener} className="AddToBag2" size="small" variant="contained"
                            style={{ width: '48%', height: '90%', fontSize: '14px', backgroundColor: '#A03037', textTransform: 'none', borderRadius: '2px' }}>
                            ADD TO BAG
                        </Button>
                        <Button onClick={wishListlistener} className="AddToWishList2" size="small" variant="contained"
                            style={{ width: '48%', height: '90%', fontSize: '14px', backgroundColor: '#333333', textTransform: 'none', borderRadius: '2px' }}>
                            <FavoriteIcon fontSize="small" style={{ marginRight: '10px' }} />
                            WishList
                        </Button>
                    </div>
                </div>
                <div className="BookDetail2">
                    <div className="BookDetail1-2">
                        <div className="BookTitle2">
                            {bookDetail.bookName}
                        </div>
                        <div className="BookAuthor2">{bookDetail.authorName}</div>
                        <div className="BookRating2">
                            <div className="Rating2">{bookDetail.rating} <StarIcon fontSize="xxsmall" style={{ color: '#F5F5F5', marginLeft: '2px' }} /></div>
                            <div className="Count2">({bookDetail.totalCountRating})</div>
                        </div>
                        <div className="Price2">
                            <div style={{ fontSize: '24px' }} className="DiscountPrice2-2">Rs. {bookDetail.discountPrice}</div>
                            <div className="OriginalPrice2-2">Rs. {bookDetail.originalPrice}</div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: '#9D9D9D' }}></div>
                    <div className="BookDetail2-2">
                        <div className="BookDescription2">Book Details</div>
                        <div className="Description2">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estundefined
                            {/* {bookDetail.description} */}
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: '#9D9D9D' }}></div>
                    <div className="BookDetail3-2">
                        <div className="Feedback2">Customer Feedback</div>
                        <div className="RatingCount2">
                            <Typography style={{ fontSize: '13px', marginLeft: '10px', textAlign: 'start', marginTop: '20px' }} component="legend">Overall Rating</Typography>
                            <Rating
                                style={{ marginLeft: '12px', marginTop: '5px' }}
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <TextField style={{ width: '95%', backgroundColor: '#F5F5F5', marginTop: '20px', marginLeft: '10px' }} placeholder={"Write your Review"} ></TextField>
                            <Button size="small" variant="contained" style={{
                                width: '10%', height: '10%', fontSize: '12px', backgroundColor: '#3371B5', textTransform: 'none', borderRadius: '2px', marginLeft: '660px', marginTop: '25px'
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailCatalogue;