import React, { useState } from 'react';
import './SignUp.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function SignUp() {

    const [Signup, setSignup] = useState({ fullname: '', email_id: '', passwords: '', phone_number: 0 });
    const [regexSignup, setRegexSignup] = useState({ 
        fullnameError: false,
        fullnameHelperText: '', 
        email_idError: false, 
        email_idHelperText: '', 
        passwordsError: false, 
        passwordsHelperText: '', 
        phone_numberError: false, 
        phone_numberHelperText: '' 
    });


    return (
        <>
            <div className="SignUpMainContainer">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Full Name</div>
                    <TextField
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
                        id="outlined-basic4"
                        error={regexSignup.phone_numberError}
                        helperText={regexSignup.phone_numberHelperText}
                        className='InputMobileNumber'
                        variant="outlined"
                        size='small'
                        style={{ width: '20vw' }}
                    />
                </div>
                <Button className="SignUpButton" size="small" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '10px' }}>
                    Signup
                </Button>
            </div>
        </>
    )
}

export default SignUp;