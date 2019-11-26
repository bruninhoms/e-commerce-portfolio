import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const princeForStripe = price * 100;
    const publisheableKey = 'pk_test_7yUUPYOIghUQBNPcjbFm518v00ECEELHU5';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total payment price is $${price}`}
            amount={princeForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publisheableKey}
        />
    );
};

export default StripeCheckoutButton;