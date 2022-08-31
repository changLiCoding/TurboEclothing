import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItemsContainer } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const navigate = useNavigate();

    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const goToCheckOutHandler = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
                {/* {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))} */}
            </CartItemsContainer>

            <Button buttonType={BUTTON_TYPE_CLASSES.base} style={{ marginTop: 'auto', }} onClick={goToCheckOutHandler}>CHECK OUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;