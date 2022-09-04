// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { useSelector, useDispatch } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    // console.log(isCartOpen)
  }
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon; 