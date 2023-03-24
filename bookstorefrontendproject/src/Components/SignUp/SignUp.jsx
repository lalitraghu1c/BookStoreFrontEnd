import React, { useState } from 'react';
import './SignUp.css'
import { SignUpApi } from '../../Services/UserServices/UserService';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z,a-z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^([0-9]*).{10}$/;

function SignUp() {

    const [Signup, setSignup] = useState({
        Full_Name: '',
        Email_Id: '',
        Password: '',
        Mobile_Number: ''
    });

    const [regexSignup, setRegexSignup] = useState({
        fullnameError: false,
        fullnameHelperText: '',

        email_idError: false,
        email_idHelperText: '',

        passwordsError: false,
        passwordsHelperText: '',

        mobile_numberError: false,
        mobile_numberHelperText: ''
    });

    const InputFullName = (event) => {
        setSignup(preState => ({ ...preState, Full_Name: event.target.value }))
    }
    const InputEmail = (event) => {
        setSignup(preState => ({ ...preState, Email_Id: event.target.value }))
    }
    const InputPassword = (event) => {
        setSignup(preState => ({ ...preState, Password: event.target.value }))
    }
    const InputMobileNumber = (event) => {
        setSignup(preState => ({ ...preState, Mobile_Number: event.target.value }))
    }


    const Submit = () => {
        console.log(Signup)
        let fullNameTest = nameRegex.test(Signup.Full_Name)
        let emailTest = emailRegex.test(Signup.Email_Id)
        let passwordTest = passwordRegex.test(Signup.Password)
        let mobileNumberTest = mobileRegex.test(Signup.Mobile_Number)
        console.log(emailTest)
        console.log(passwordTest)

        if (nameRegex.test(Signup.Full_Name) === false) {
            setRegexSignup(preState => ({ ...preState, fullnameError: true, fullnameHelperText: "Capital Letter" }))
        }
        else if (nameRegex.test(Signup.Full_Name) === true) {
            setRegexSignup(preState => ({ ...preState, fullnameError: false, fullnameHelperText: "" }))
        }

        if (emailRegex.test(Signup.Email_Id) === false) {
            setRegexSignup(preState => ({ ...preState, email_idError: true, email_idHelperText: "Enter correct email address" }))
        }
        else if (emailRegex.test(Signup.Email_Id) === true) {
            setRegexSignup(preState => ({ ...preState, email_idError: false, email_idHelperText: "" }))
        }

        if (passwordRegex.test(Signup.Password) === false) {
            setRegexSignup(preState => ({ ...preState, passwordsError: true, passwordsHelperText: "Use 8 or more characters with a mix of letters, numbers & symbols" }))
        }
        else if (passwordRegex.test(Signup.Password) === true) {
            setRegexSignup(preState => ({ ...preState, passwordsError: false, passwordsHelperText: "" }))
        }

        if (mobileRegex.test(Signup.Mobile_Number) === false) {
            setRegexSignup(preState => ({ ...preState, mobile_numberError: true, mobile_numberHelperText: "" }))
        }
        else if (mobileRegex.test(Signup.Mobile_Number) === true) {
            setRegexSignup(preState => ({ ...preState, mobile_numberError: false, mobile_numberHelperText: "" }))
        }
        if (fullNameTest === true && emailTest === true && passwordTest === true && mobileNumberTest === true) {
            SignUpApi(Signup)
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
            <div className="SignUpMainContainer">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Full Name</div>
                    <TextField
                        onChange={InputFullName}
                        id="outlined-basic1"
                        error={regexSignup.fullnameError}
                        helperText={regexSignup.fullnameHelperText}
                        className='InputFullName'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                    <TextField
                        onChange={InputEmail}
                        id="outlined-basic2"
                        error={regexSignup.email_idError}
                        helperText={regexSignup.email_idHelperText}
                        className='InputGmail'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
                    <TextField
                        onChange={InputPassword}
                        id="outlined-basic3"
                        error={regexSignup.passwordsError}
                        helperText={regexSignup.passwordsHelperText}
                        className='InputPassword'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Mobile Number</div>
                    <TextField
                        onChange={InputMobileNumber}
                        id="outlined-basic4"
                        error={regexSignup.mobile_numberError}
                        helperText={regexSignup.monile_numberHelperText}
                        className='InputMobileNumber'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                </div>
                <Button onClick={Submit} className="SignUpButton" size="small" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '10px' }}>
                    Signup
                </Button>
            </div>
        </>
    )
}

export default SignUp;