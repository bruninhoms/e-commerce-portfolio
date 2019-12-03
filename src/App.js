import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactNotification from 'react-notifications-component';

import './App.css';
import 'react-notifications-component/dist/theme.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import InfoPage from './pages/info/info.component.jsx';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

import { setCurrentUser } from './redux/user/user.actions.js';
import { selectCurrentUser } from './redux/user/user.selectors.js';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const UserRef = await createUserProfileDocument(userAuth);

        UserRef.onSnapshot(snapShot =>{
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <ReactNotification />
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} onUpdate={() => window.scrollTo(0, 0)} />
            <Route path='/shop' component={ShopPage} onUpdate={() => window.scrollTo(0, 0)} />
            <Route exact path='/info' component={InfoPage} />
            <Route exact path='/checkout' component={CheckoutPage} onUpdate={() => window.scrollTo(0, 0)} />
            <Route 
            exact 
            path='/signin' 
            render={() => 
              this.props.currentUser ? 
              (<Redirect to='/' />) : 
              (<SignInAndSignUpPage />)} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
