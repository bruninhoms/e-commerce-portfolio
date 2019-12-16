import { takeLatest, put, all, call } from 'redux-saga/effects';
import { store } from 'react-notifications-component';

import UserActionTypes from './user.types.js';
import personalizedNotification from '../../components/notifications/notifications.component.jsx';

import {signInFailure, 
        signInSucess,
        signOutSuccess,
        signOutFailure,
        signUpFailure,
        signUpSucess} from './user.actions.js';

import { auth, 
        providerGoogle, 
        providerFacebook, 
        createUserProfileDocument,
        getCurrentUser } from '../../firebase/firebase.utils.js';

export function* getSnapshotFromUserAuth(userAuth) {
    try{   
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data}));
        yield store.addNotification({
            content: personalizedNotification('Sucess !', 'Log in sucessful', 'sucess'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 1000,
            }
            })
    } catch(error) {
        yield put(signInFailure(error));
        yield store.addNotification({
            content: personalizedNotification('Failed !', 'Check your credentials', 'error'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    }
}

export function* getSnapshotFromUserSignUp(userAuth, displayName) {
    try{   
        const userRef = yield call(createUserProfileDocument, userAuth, {displayName});
        const userSnapshot = yield userRef.get();
        yield put(signUpSucess({ id: userSnapshot.id, ...userSnapshot.data}));
        yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data}));
        yield store.addNotification({
            content: personalizedNotification('Sucess !', 'User created', 'sucess'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    } catch(error) {
        yield put(signUpFailure(error));
        yield store.addNotification({
            content: personalizedNotification('Failed !', 'Something went wrong', 'error'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    }
}

export function* signInWithGoogle() {
    try{
        const {user}  = yield auth.signInWithPopup(providerGoogle);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
        yield store.addNotification({
            content: personalizedNotification('Failed !', 'Check your credentials', 'error'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    }
};

export function* signInWithFacebook() {
    try{
        const {user} = yield auth.signInWithPopup(providerFacebook);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
        yield store.addNotification({
            content: personalizedNotification('Failed !', 'Check your credentials', 'error'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    }
};

export function* signInWithEmail({ payload: { email, password } }) {
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
        yield store.addNotification({
            content: personalizedNotification('Failed !', 'Check your credentials', 'error'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    }
};

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error))
    }
};

export function* signOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error){
        yield put(signOutFailure(error))
        yield store.addNotification({
            content: personalizedNotification('Failed !', 'Failed to Sign Out', 'error'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    }
};

export function* signUp({ payload: { email, password, displayName } }) {
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield getSnapshotFromUserSignUp(user, displayName);
    }catch(error){
        yield put(signUpFailure(error));
        yield store.addNotification({
            content: personalizedNotification('Failed !', 'Something is wrong!', 'error'),
            container: 'bottom-left',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
            }
          })
    }
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onFacebookSignInStart() {
    yield takeLatest(UserActionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook);
};

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onFacebookSignInStart), 
        call(onEmailSignInStart), 
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
    ]);
}