import React, { useState } from 'react'
import './ResetPassword.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ResetPasswordApi } from '../../Services/UserServices/UserService';
const passwordRegex = /^(?=.*[A-Z,a-z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function ResetPassword() {
    const [Reset, setReset] = useState({
        New_Password: "",
        Confirm_Password: ""
    })
    const [RegexReset, setRegexReset] = useState({
        newPasswordBorder: false,
        newPasswordHelperText: "",

        confirmPasswordBorder: true,
        confirmPasswordHelperText: ""
    })

    const takeNewPassword = (event) => {
        console.log(event.target.value)
        setReset(prevState => ({ ...prevState, New_Password: event.target.value }))
    }
    const takeConfirmPassword = (event) => {
        console.log(event.target.value)
        setReset(prevState => ({ ...prevState, Confirm_Password: event.target.value }))
    }

    const Submit = () => {
        let passwordTest = passwordRegex.test(Reset.New_Password)
        let confirmPasswordTest = passwordRegex.test(Reset.Confirm_Password)

        if (passwordTest === false) {
            setRegexReset(prevState => ({ ...prevState, newPasswordBorder: true, newPasswordHelperText: 'Recheck the password' }))
        }
        else if (passwordTest === true) {
            setRegexReset(prevState => ({ ...prevState, newPasswordBorder: false, newPasswordHelperText: '' }))
        }

        if (confirmPasswordTest === false) {
            setRegexReset(prevState => ({ ...prevState, confirmPasswordBorder: true, confirmPasswordHelperText: 'Recheck the password' }))
        }
        else if (confirmPasswordTest === true) {
            setRegexReset(prevState => ({ ...prevState, confirmPasswordBorder: false, confirmPasswordHelperText: '' }))
        }

        if (passwordTest === true && confirmPasswordTest === true) {
            ResetPasswordApi(Reset)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return (
        <>
            <div className="ResetPasswordMainContainer">
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
                        Reset Your Password?
                    </div>
                    <div style={{ gap: '12px' }} className="MiddleContainerForgot">
                        <div className="LoginInput">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
                            <TextField
                                onChange={takeNewPassword}
                                error={RegexReset.newPasswordBorder}
                                helperText={RegexReset.newPasswordHelperText}
                                id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>
                        <div className="LoginInput">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Confirm Password</div>
                            <TextField
                                onChange={takeConfirmPassword}
                                error={RegexReset.confirmPasswordBorder}
                                helperText={RegexReset.confirmPasswordHelperText}
                                id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>
                        <Button onClick={Submit} className="ResetPasswordButton" size="small" variant="contained" style={{ width: '18vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '15px', marginTop: '15px', marginLeft: '50px' }}>
                            Reset Password
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResetPassword