import React from 'react';
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
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }
    

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { googleSignInStart, facebookSignInStart } = this.props;
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
                        <BufferLoginButton style={{fontFamily: 'Karla'}}> Sign in with Email </BufferLoginButton >
                        <GoogleLoginButton type='button' onClick={googleSignInStart} style={{fontFamily: 'Karla'}}> Sign in with Google </GoogleLoginButton>
                        <FacebookLoginButton type='button' onClick={facebookSignInStart} style={{fontFamily: 'Karla' }}> Sign in with Facebook </FacebookLoginButton>
                    </Buttons>
                    
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    facebookSignInStart: () => dispatch(facebookSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);