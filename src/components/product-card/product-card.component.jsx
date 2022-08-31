import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ProductCardContainer, ProductCardContainerFooter, ProductCardContainerName, ProductCardContainerPrice } from './product-card.styles'

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart, cartItems } = useContext(CartContext);

    const addProductToCart = () => {
        // console.log(cartItems);
        // console.log(CartContext);
        return (addItemToCart(product))
    };

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <ProductCardContainerFooter>
                <ProductCardContainerName>{name}</ProductCardContainerName>
                <ProductCardContainerPrice>{`$${price}`}</ProductCardContainerPrice>
            </ProductCardContainerFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>ADD TO CART</Button>
        </ProductCardContainer>
    )
}

export default ProductCard; 