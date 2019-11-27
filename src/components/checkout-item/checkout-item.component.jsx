import React from 'react';
import { connect } from 'react-redux';
import { store } from 'react-notifications-component';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions.js';
import personalizedNotification from '../notifications/notifications.component.jsx';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;

    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => {
            clearItem(cartItem);
            store.addNotification({
                content: personalizedNotification('Removed !', 'Removed from cart ', 'clearFromCart'),
                container: 'bottom-left',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 1000,
                }
              });
            }}>
                &#10005;
        </div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);