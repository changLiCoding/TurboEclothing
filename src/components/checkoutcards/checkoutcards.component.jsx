import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CheckoutImgContainer, CheckoutItemContainer, Quantity, Value, Arrow, RemoveButton, BaseSpan } from './checkoutcards.styles.jsx';

const CheckOutCard = ({ cartItem }) => {

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const removeCartHandler = () => { removeItemFromCart(cartItem) };
    const addCartHandler = () => { addItemToCart(cartItem) };
    const removeFromCart = () => { clearItemFromCart(cartItem) };
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