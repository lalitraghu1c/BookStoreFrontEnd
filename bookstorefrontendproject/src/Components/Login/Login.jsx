import React, { useState } from "react";
import './Login.css'
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

function Login() {
    const [Login, setLogin] = useState({ email_id: '', passwords: '' });
    const [regexLogin, setRegexLogin] = useState({
        email_idError: false,
        email_idHelperText: '',
        passwordsError: false,
        passwordsHelperText: ''
    })

    return (
        <>
            <div className="LoginMainContainer">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                    <TextField
                        id="outlined-basic"
                        error={regexLogin.email_idError}
                        helperText={regexLogin.email_idHelperText}
                        className='InputGmail'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
                    <TextField
                        id="outlined-basic"
                        error={regexLogin.passwordsError}
                        helperText={regexLogin.passwordsHelperText}
                        className='InputPassword'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', fontSize: '12px', color: '#9D9D9D' }}>Forget Password?</div>
                </div>
                <Button className="LoginButton" size="small" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px' }}>
                    Login
                </Button>
                <div className="OrDiv">
                    <div style={{ width: '5vw', height: '0.5px', backgroundColor: 'red', marginTop: '22px' }}></div>
                    <h4 style={{ marginTop: '8px' }}>OR</h4>
                    <div style={{ width: '5vw', height: '0.5px', backgroundColor: 'red', marginTop: '22px' }}></div>
                </div>
                <div className="FaceBookGoogleButton">
                    <Button size="small" variant="contained" style={{ textTransform: 'none', fontSize: '17px', marginRight: '0.5vw', width: '10vw', backgroundColor: '#4266B2' }}>
                        FaceBook
                    </Button>
                    <Button size="small" variant="contained" style={{ textTransform: 'none', fontSize: '17px', width: '10vw', backgroundColor: '#F5F5F5', borderColor: '#E4E4E4', color: '#0A0102' }}>
                        Google
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Login
