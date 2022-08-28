import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";


const CheckOutCard = ({ cartItem }) => {

    const { addItemToCart, removeItemFromCart } = useContext(CartContext);
    const removeCartHandler = () => { removeItemFromCart(cartItem) };
    const addCartHandler = () => { addItemToCart(cartItem) };
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div>
            <div>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span >{name}</span>
            <div >
                <div className='arrow' onClick={removeCartHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className='arrow' onClick={addCartHandler}>
                    &#10095;
                </div>
            </div>
            <span >{price}</span>
            <div className='remove-button' onClick>
                &#10005;
            </div>
        </div>
    )
}

export default CheckOutCard;