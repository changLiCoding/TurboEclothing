import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.cotext';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
        console.log(isCartOpen)
    }
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon onClick={toggleIsCartOpen} className='shopping-icon' />
            <span className='item-count'>10</span>
        </div>
    )
}

export default CartIcon; 