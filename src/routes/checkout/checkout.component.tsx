// import { useContext } from "react";
import { useSelector } from 'react-redux';

import CheckOutCard from "../../components/checkoutcards/checkoutcards.component";
import PaymentForm from '../../components/payment-form/payment-form.component';
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
// import { CartContext } from "../../contexts/cart.context";

import { CheckoutContainer, CheckoutHeader, CheckoutTotal, HeaderBlock } from './checkout.styles';

const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckOutCard key={cartItem.id} cartItem={cartItem} />
            ))}
            <CheckoutTotal>TOTAL: ${cartTotal}</CheckoutTotal>
            <PaymentForm />
        </CheckoutContainer>
    )
}

export default Checkout;