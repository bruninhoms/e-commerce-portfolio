import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { BufferLoginButton  } from "react-social-login-buttons";

import FormInput from '../form-input/form-input.component.jsx';

import { googleSignInStart, facebookSignInStart, emailSignInStart } from '../../redux/user/user.actions.js';

import {
    SignInContainer,
    Buttons
} from './sign-in.styles.jsx';

const SignIn = ({ emailSignInStart, googleSignInStart, facebookSignInStart }) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const { email, password } = userCredentials;


    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    };
    

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value });
    };
    return(
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your e-mail and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    handleChange={handleChange}
                    label = "Email"
                    required
                />

                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    handleChange={handleChange}
                    label = "Password"
                    required
                />
                <Buttons>
                    <BufferLoginButton style={{fontFamily: 'Karla'}}> Sign in with Email </BufferLoginButton >
                    <GoogleLoginButton type='button' onClick={googleSignInStart} style={{fontFamily: 'Karla'}}> Sign in with Google </GoogleLoginButton>
                    <FacebookLoginButton type='button' onClick={facebookSignInStart} style={{fontFamily: 'Karla' }}> Sign in with Facebook </FacebookLoginButton>
                </Buttons>
                
            </form>
        </SignInContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    facebookSignInStart: () => dispatch(facebookSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);