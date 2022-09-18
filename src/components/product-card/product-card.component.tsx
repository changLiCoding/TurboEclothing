// import { useContext } from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { CartContext } from '../../contexts/cart.context';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/category.type';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardContainerFooter, ProductCardContainerName, ProductCardContainerPrice } from './product-card.styles'

type ProductCartProps = {
    product: CategoryItem
}

const ProductCard: FC<ProductCartProps> = ({ product }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price } = product;
    const cartItems = useSelector(selectCartItems);
    // const { addItemToCart, cartItems } = useContext(CartContext);

    const addProductToCart = () => {
        // console.log(cartItems);
        // console.log(CartContext);
        return (dispatch(addItemToCart(cartItems, product)))
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