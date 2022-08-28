import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const navigate = useNavigate();

    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const goToCheckOutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
                {/* {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))} */}
            </div>

            <Button onClick={goToCheckOutHandler}>CHECK OUT</Button>
        </div>
    )
}

export default CartDropdown;