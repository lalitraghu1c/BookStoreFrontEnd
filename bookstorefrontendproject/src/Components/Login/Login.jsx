import React, { useState } from "react";
import './Login.css'
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { LoginApi } from "../../Services/UserServices/UserService";
import { useNavigate } from "react-router-dom";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z,a-z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login() {
    const [Login, setLogin] = useState({
        Email_Id: '',
        Password: ''
    });

    const [regexLogin, setRegexLogin] = useState({
        email_idError: false,
        email_idHelperText: '',

        passwordsError: false,
        passwordsHelperText: ''
    })

    const takeEmail=(event) =>{
        console.log(event.target.value) 
        setLogin(  preState => ({...preState, Email_Id:event.target.value})) 
    }
    const takePassword=(event) =>{
        setLogin(  preState => ({...preState, Password:event.target.value}))
    }

    const Submit = () => {
        console.log(setLogin)
        let emailTest = emailRegex.test(Login.Email_Id)
        let passwordTest = passwordRegex.test(Login.Password)
        console.log(emailTest)
        console.log(passwordTest)

        if (emailTest === false) {
            setRegexLogin(preState => ({ ...preState, email_idError: true, email_idHelperText: 'Could not find your Email Address' }))
        }
        else if (emailTest === true) {
            setRegexLogin(preState => ({ ...preState, email_idError: false, email_idHelperText: '' }))
        }
        if (passwordTest === false) {
            setRegexLogin(preState => ({ ...preState, passwordsError: true, passwordsHelperText: 'Wrong password, Try again' }))
        }
        else if (passwordTest === true) {
            setRegexLogin(preState => ({ ...preState, passwordsError: false, passwordsHelperText: '' }))
        }
        //Api Call
        if (emailTest === true && passwordTest === true) {
            LoginApi(Login)
                .then(response => {
                    console.log(response)
                    localStorage.setItem('token',response.data.data)
                    navigate('/dashboard')
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    let navigate = useNavigate()

    const ForgotPassword =()=>{
        navigate('/forgotpassword')
    }

    return (
        <>
            <div className="LoginMainContainer">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                    <TextField
                        onChange={takeEmail}
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
                        onChange={takePassword}
                        id="outlined-basic"
                        error={regexLogin.passwordsError}
                        helperText={regexLogin.passwordsHelperText}
                        className='InputPassword'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                    <div onClick={ForgotPassword} style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', fontSize: '12px', color: '#9D9D9D' }}>Forget Password?</div>
                </div>
                <Button onClick={Submit} className="LoginButton" size="small" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px' }}>
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
