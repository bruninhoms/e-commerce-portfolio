import React, { useEffect } from 'react';
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

import { selectCurrentUser } from './redux/user/user.selectors.js';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

 useEffect(() => {
  checkUserSession();
 }, [checkUserSession]);

    return (
      <div>
        <ReactNotification />
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/info' component={InfoPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route 
            exact 
            path='/signin' 
            render={() => 
              currentUser ? 
              (<Redirect to='/' />) : 
              (<SignInAndSignUpPage />)} />
          </Switch>
        <Footer />
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
