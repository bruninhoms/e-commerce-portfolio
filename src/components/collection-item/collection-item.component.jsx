import React from 'react';
import { connect } from 'react-redux';
import { store } from 'react-notifications-component';

import personalizedNotification from '../notifications/notifications.component.jsx';
import DiscountTag from '../discount-tag/discount-tag.component.jsx';
import { 
    CollectionItemDiv, 
    BackgroundImage, 
    AddButton, 
    CollectionFooterContainer,
    Name,
    Price,
    NameDiscount,
    PriceDiscount,
    PriceDiscountStrike
} from './collection-item.styles.jsx';

import { addItem } from '../../redux/cart/cart.actions.js';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl, discount } = item;
    const priceDiscount = price * (1 - (discount/100));

    return (
        <CollectionItemDiv>
            <BackgroundImage
                className ='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            {discount > 0 ? (<DiscountTag value={discount} /> ): null}
            <CollectionFooterContainer>
                {discount > 0 ?  <NameDiscount>{ name }</NameDiscount> : <Name>{ name }</Name>}
                {discount > 0 ? <div>
                                <PriceDiscountStrike>${ price }</PriceDiscountStrike>
                                <PriceDiscount>${(priceDiscount).toFixed(0)}</PriceDiscount> 
                                </div> 
                                : 
                                <Price>${ price }</Price> 
                }
            </CollectionFooterContainer>
            <AddButton 
                onClick={() => 
                    {
                        addItem(item);
                        store.addNotification({
                            content: personalizedNotification('Sucess !', 'Added to cart', 'sucess'),
                            container: 'bottom-left',
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                              duration: 1000,
                            }
                          })
                    }
                } 
            inverted>
                ADD TO CART 
            </AddButton>
        </CollectionItemDiv>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);