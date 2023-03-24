import React from 'react'
import '../ResetPassword/ResetPassword.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ResetPassword() {


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
                    <div style={{gap:'12px'}} className="MiddleContainerForgot">
                        <div className="LoginInput">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
                            <TextField id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>
                        <div className="LoginInput">
                            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Confirm Password</div>
                            <TextField id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }} />
                        </div>
                        <Button className="ResetPasswordButton" size="small" variant="contained" style={{ width: '18vw', backgroundColor: '#A03037', textTransform: 'none', fontSize: '15px', marginTop: '15px', marginLeft: '50px' }}>
                            Reset Password
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResetPassword