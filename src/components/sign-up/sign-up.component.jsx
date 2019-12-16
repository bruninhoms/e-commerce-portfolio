import React from 'react';
import { connect } from 'react-redux';
import { BufferLoginButton } from "react-social-login-buttons";
import { store } from 'react-notifications-component';

import FormInput from '../form-input/form-input.component.jsx';

import { signUpStart } from '../../redux/user/user.actions.js';
import personalizedNotification from '../notifications/notifications.component.jsx';

import {
    SignUpContainer,
    Title
} from './sign-up.styles.jsx';

class SignUp extends React.Component{
    constructor(props){
        super(props);

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
        const { signUpStart } = this.props;

        if(password !== confirmPassword){
            store.addNotification({
                content: personalizedNotification('Error !', 'Passwords dont match!', 'error'),
                container: 'bottom-left',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 1000,
                }
              })
            return;
        }else{
        signUpStart(email, password, displayName);
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
    };

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
                     <BufferLoginButton style={{fontFamily: 'Karla' }}>Sign Up with Email</BufferLoginButton>
                </form>
            </SignUpContainer>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);