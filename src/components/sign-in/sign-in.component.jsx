import React from 'react';
import { store } from 'react-notifications-component';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { BufferLoginButton  } from "react-social-login-buttons";

import FormInput from '../form-input/form-input.component.jsx';
import personalizedNotification from '../notifications/notifications.component.jsx';

import { auth, signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils.js';

import {
    SignInContainer,
    Buttons
} from './sign-in.styles.jsx';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
            store.addNotification({
                content: personalizedNotification('Sucess !', 'Log in sucessful', 'sucess'),
                container: 'bottom-left',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 1000,
                }
              })
        }catch(error){
            console.log(error);
            store.addNotification({
                content: personalizedNotification('Failed !', 'Check your credentials', 'error'),
                container: 'bottom-left',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 1000,
                }
              })
        }

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label = "Email"
                        required
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label = "Password"
                        required
                    />
                    <Buttons>
                        <BufferLoginButton  type="submit" style={{fontFamily: 'Karla'}}> Sign in with Email </BufferLoginButton >
                        <GoogleLoginButton onClick={signInWithGoogle} style={{fontFamily: 'Karla'}}> Sign in with Google </GoogleLoginButton>
                        <FacebookLoginButton onClick={signInWithFacebook} style={{fontFamily: 'Karla' }}> Sign in with Facebook </FacebookLoginButton>
                    </Buttons>
                    
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;