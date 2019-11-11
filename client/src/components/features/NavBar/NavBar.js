import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Logo from '../../common/Logo/Logo';
import CartIcon from '../../common/CartIcon/CartIcon';
import MainMenu from '../../layout/MainMenu/MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss'

const NavBar = (props) => {
  const { showMenu, toggleMenu, cart } = props;

  return (
    <nav className="navbar">
      <div className="nav-mobile">
        <Logo />
        <FontAwesomeIcon icon={faBars} className={"burger" + (showMenu ? " active" : "")} onClick={toggleMenu} />
      </div>
      <div className="navbar-wrapper">
        <MainMenu showMenu={showMenu}/>
        <NavLink className="cart-icon" to="/cart" activeClassName="active">
          <CartIcon itemsQty={cart.length} />
        </NavLink>
      </div>
    </nav>
  );

}

NavBar.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
}

export default NavBar;