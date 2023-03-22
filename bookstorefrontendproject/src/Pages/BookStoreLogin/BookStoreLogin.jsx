import React, { useState } from "react";
import './BookStoreLogin.css'
import BookStoreLoginImage from '../../Images/BookStoreLoginImage/BookStoreLoginImage.png'
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";

function BookStoreLogin() {
    const [toggle, setToggle] = useState({
        ButtonToggle:true, 
        ButtonOneColor: "#0A0102", 
        ButtonOneDisplay:"", 
        ButtonTwoColor: "#878787", 
        ButtonTwoDisplay:"none"
    });

    const LoginClick = () => {
        setToggle(preState => ({...preState, ButtonToggle:true, ButtonOneColor: "#0A0102", ButtonOneDisplay:"", ButtonTwoColor: "#878787", ButtonTwoDisplay:"none"}))
    }
    const RegisterClick = () => {
        setToggle(preState => ({...preState, ButtonToggle:false, ButtonOneColor: "#878787", ButtonOneDisplay:"none", ButtonTwoColor: "#0A0102", ButtonTwoDisplay:""}))
    }
    
    return (
        <div className="BookStoreLoginMainContainer">
            <div className="BookStoreLoginFirstDiv">
                <img src={BookStoreLoginImage} height="70%" width="75%" alt="LoginSingup" style={{ borderRadius: '50%' }} />
                <h3>ONLINE BOOK SHOPPING</h3>
            </div>
            <div className="BookStoreLoginSecondDiv">
                <div className="BookStoreLoginButtonDiv">
                    <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                        <div  size="large" onClick={LoginClick} style={{ backgroundColor: '#fff', fontWeight: '600', fontSize: '25px', color: toggle.ButtonOneColor , cursor:'pointer'}}>
                            LOGIN
                        </div>
                        <div style={{ width: '2vw', height: '0.7vh', backgroundColor: '#A03037', borderRadius: '5px' , display: toggle.ButtonOneDisplay}}></div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                        <div  size="large" onClick={RegisterClick} style={{ backgroundColor: '#fff', fontWeight: '600', fontSize: '25px', color: toggle.ButtonTwoColor, cursor:'pointer' }}>
                            SIGNUP
                        </div>
                        <div style={{ width: '2vw', height: '0.7vh', backgroundColor: '#A03037', borderRadius: '5px' , display: toggle.ButtonTwoDisplay}}></div>
                    </div>
                </div>
                {
                    toggle.ButtonToggle ? <Login /> : <SignUp />
                }
            </div>
        </div>
    )
}

export default BookStoreLogin;