import React from 'react'
import { useNavigate } from 'react-router'
import StartUpImage from '../../Images/StartUpImage/StartUpImage.png'
import '../StartUp/StartUp.css'



function StartUp() {

    let navigate = useNavigate()

    const navToBookStoreLogin = () => {
        navigate('/bookstorelogin')
    }

    return (
        <div>
            <div className="StartUpMainContainer">
                <div className="StartUpMiddleSection">
                    <div className="StartUpTitle">
                        PLEASE LOG IN
                    </div>
                    <div className="StartUpText">
                        Login to view items in your wishlist.
                    </div>
                    <div className="StartUpImage">
                        <img src={StartUpImage} alt="" />
                    </div>
                    <div onClick={navToBookStoreLogin} style={{ cursor:'pointer' }} className="StartUpLoginSignup">
                        LOGIN/SIGNUP
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartUp