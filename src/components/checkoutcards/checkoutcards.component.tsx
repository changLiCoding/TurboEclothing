// import { useContext } from "react";
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { CartContext } from "../../contexts/cart.context";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.type';

import { CheckoutImgContainer, CheckoutItemContainer, Quantity, Value, Arrow, RemoveButton, BaseSpan } from './checkoutcards.styles';

type CheckoutCartProps = {
    cartItem: CartItem;
}

const CheckOutCard: FC<CheckoutCartProps> = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const removeCartHandler = () => { dispatch(removeItemFromCart(cartItems, cartItem)) };
    const addCartHandler = () => { dispatch(addItemToCart(cartItems, cartItem)) };
    const removeFromCart = () => { dispatch(clearItemFromCart(cartItems, cartItem)) };
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutImgContainer>
                <img src={imageUrl} alt={`${name}`} />
            </CheckoutImgContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={removeCartHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addCartHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <RemoveButton onClick={removeFromCart}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckOutCard;