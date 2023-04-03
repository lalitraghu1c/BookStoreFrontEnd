import React, { useEffect, useState } from "react";
import '../Cart/Cart.css';
import Header from "../Header/Header";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { GetAllCart, Removefromcart } from "../../Services/DataServices/DataServices";


function Cart() {

    const [cartArray, setCartArray] = useState([])
    let navigate = useNavigate();
    const gotofrontpage = () => {
        navigate('/BookSummary')
    }

    const deleteCart = (cartId) => {
        console.log("Cart Id : ", cartId);
        Removefromcart(cartId)
            .then((response) => {
                console.log(response);
                // localStorage.setItem("token", response.data.data);
                // GetAllCart().then((response) => {
                //     console.log(response);
                //     setCartArray(response.data.data);
                //});
                autoRefresh();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const autoRefresh = () => {
        GetAllCart()
    }
    useEffect(() => {
        GetAllCart()
    }, [])

    useEffect(() => {
        GetAllCart(cartArray.cartId)
            .then((response) => {
                console.log(response)
                setCartArray(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="maincartdiv">
            <Header />
            <div className="BookNHomeCart">
                <div className="home3" onClick={gotofrontpage}>Home/</div>
                <div className="CartTitle">My Cart</div>
            </div>
            <div className="thirdcartCn">
                <div className="div1fortitle">
                    <div className="MyCart">My cart</div>
                    <div className="seclocation">
                        <select style={{ width: '100%', height: '100%' }} >
                            <LocationOnIcon />
                            <option value=" Use Current Location"> Use Current Location</option>
                            <option value="Vidisha">Vidisha</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Indore">Indore</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    </div>
                </div>
                <div className="imagecart">
                    {
                        cartArray.map((cart) => (
                            <div className="leftimg">
                                <div className="imgpartcart">
                                    <img style={{ width: '80%', height: '80%', }} src={cart.bookImage} />
                                </div>
                                <div className="detailscart">
                                    <div className="cartTitle">Dont Make Me Think</div>
                                    <div className="cartauthor">by Steve Krug</div>
                                    <div className="cartprice">
                                        <div className="cartdis">{cart.discountPrice}</div>
                                        <div className="castorg">{cart.originalPrice}</div>
                                    </div>
                                    <div className="counter">
                                        <div className="counterbtns">
                                            <button type="button" style={{ border: '1px solid #DBDBDB', borderRadius: '50%', fontSize: '16px' }}>-</button>
                                            <button style={{ width: '40%', height: '70%', border: '1px solid #DBDBDB', backgroundColor: '#FAFAFA' }}>1</button>
                                            <button style={{ border: '1px solid #DBDBDB', borderRadius: '50%', fontSize: '15px' }}>+</button>
                                        </div>
                                        <div onClick={()=>deleteCart(cart.cartId)}
                                            className="remove" style={{ fontSize: '14px', marginLeft: '20px' }}>Remove</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="btncart">
                    <Button size="small" variant="outlined" style={{ textTransform: 'none', fontSize: '12px', width: '11vw', height: '55%', backgroundColor: '#3371B5', color: '#FCFCFC', borderRadius: '2px', marginRight: '4.5%' }}>
                        PLACE ORDER
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Cart