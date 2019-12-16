import UserActionTypes from './user.types.js';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const facebookSignInStart = () => ({
    type: UserActionTypes.FACEBOOK_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSucess = user => ({
    type: UserActionTypes.SIGN_IN_SUCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCESS,
});

export const signUpStart = (emailPasswordAndDisplayName) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: emailPasswordAndDisplayName,
});

export const signUpSucess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCESS,
    payload: {user, additionalData}
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});