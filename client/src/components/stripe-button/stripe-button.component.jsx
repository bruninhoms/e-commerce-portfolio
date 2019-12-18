import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { store } from 'react-notifications-component';

import personalizedNotification from '../notifications/notifications.component.jsx';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publisheableKey = 'pk_test_7yUUPYOIghUQBNPcjbFm518v00ECEELHU5';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response  => {
                store.addNotification({
                    content: personalizedNotification('Sucess !', 'Payment sucessful', 'sucess'),
                    container: 'bottom-left',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000,
                    }
                    })
            })
            .catch(error => {
                store.addNotification({
                    content: personalizedNotification('Failed !', 'Some of the data are not valid', 'error'),
                    container: 'bottom-left',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000,
                    }
                    })
            });
    };

    return(
        <StripeCheckout
            label='Pay Now &#x1f4b3;'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total payment price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publisheableKey}
        />
    );
};

export default StripeCheckoutButton;