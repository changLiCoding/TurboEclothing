import { Fragment, useContext } from 'react';

import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    // const { currentUser,
    // setCurrentUser
    // } = useContext(UserContext);
    // console.log(currentUser);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/contact'>CONTACT</NavLink>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (<NavLink to='/auth'>SIGN IN</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />

        </Fragment>)
}

export default Navigation;