import React, { useState } from "react";
import '../ForgotPassword/ForgotPassword.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ForgotPasswordApi } from "../../Services/UserServices/UserService";
import { useNavigate } from "react-router-dom";


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

function ForgotPassword() {

    let navigate = useNavigate()

    const [Password, setPassword] = useState({
        Email_Id: ''
    })

    const [RegexForgot, setRegexForgot] = useState({
        email_idBorder: false,
        email_idHelperText: "",
    })

    const takeEmail = (event) => {
        console.log(event.target.value)
        setPassword(prevState => ({ ...prevState, Email_Id: event.target.value }))
    }

    const Submit = () => {
        console.log(Password)
        let emailTest = emailRegex.test(Password.Email_Id)
        console.log(emailTest)

        if (emailTest === false) {
            setRegexForgot(prevState => ({ ...prevState, email_idBorder: true, email_idHelperText: 'Could not find your Bookstore Account' }))
        }
        else if (emailTest === true) {
            setRegexForgot(prevState => ({ ...prevState, email_idBorder: false, email_idHelperText: '' }))
        }
        if (emailTest === true) {
            ForgotPasswordApi(Password.Email_Id)
                .then(response => {
                    console.log(response)
                    localStorage.setItem('token', response.data.data)
                    navigate('/resetpassword')
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    const navigateToSignup = () =>{
        navigate('/')
     }

    return (
        <>
            <div className="ForgotPasswordMainContainer">
                <div className="HeaderMain">
                    <div className="BookStoreLogo">
                        <img style={{ width: '65px' }} src="https://img.freepik.com/premium-vector/reading-line-icon-bookstore-logo-open-book-book-sticker-logo-icon-vector-library-sign-education-educational-symbol-vector-isolated-background-eps-10_399089-1081.jpg?w=2000" alt="" />
                    </div>
                    <div className="BookStoreText">
                        Bookstore
                    </div>
                </div>
                <div className="MiddleContainer">
                    <div className="MiddleHeader">
                        Forget Your Password?
                    </div>
                    <div className="MiddleContainerForgot">
                        <div className="MiddleText">
                            Enter your email address and we'll send you
                            a link to reset your password.
                        </div>
                        <div className="LoginInput">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                            <TextField
                                onChange={takeEmail}
                                error={RegexForgot.email_idBorder}
                                helperText={RegexForgot.email_idHelperText}
                                id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>

                        <Button onClick={Submit} className="ResetPasswordButton" size="small" variant="contained" style={{ width: '18vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '15px', marginTop: '15px', marginLeft: '50px' }}>
                            Reset Password
                        </Button>
                    </div>

                    <div onClick={navigateToSignup} className="CreateAccount">
                        CREATE ACCOUNT
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;