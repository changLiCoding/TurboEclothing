import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import './checkoutcards.styles.scss';

const CheckOutCard = ({ cartItem }) => {

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const removeCartHandler = () => { removeItemFromCart(cartItem) };
    const addCartHandler = () => { addItemToCart(cartItem) };
    const removeFromCart = () => { clearItemFromCart(cartItem) };
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeCartHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addCartHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={removeFromCart}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckOutCard;