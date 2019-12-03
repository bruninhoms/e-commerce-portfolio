import React from 'react';
import { store } from 'react-notifications-component';
import { BufferLoginButton } from "react-social-login-buttons";

import FormInput from '../form-input/form-input.component.jsx';
import personalizedNotification from '../notifications/notifications.component.jsx';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import {
    SignUpContainer,
    Title
} from './sign-up.styles.jsx';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
              );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            store.addNotification({
                content: personalizedNotification('Sucess !', 'User created', 'sucess'),
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
                content: personalizedNotification('Failed !', 'ERROR', 'error'),
                container: 'bottom-left',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 1000,
                }
              })
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpContainer>
                <Title>I do not have an account</Title>
                <span>Sign up with your e-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                     />
                     <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                     />
                     <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                     />
                     <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                     />
                     <BufferLoginButton type='submit' style={{fontFamily: 'Karla' }}>Sign Up with Email</BufferLoginButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;