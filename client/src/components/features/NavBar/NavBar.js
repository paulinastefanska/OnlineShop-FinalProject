import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss'

const NavBar = (props) => {
  const { showMenu, toggleMenu } = props;

  return (
    <nav className={"navbar " + (showMenu ? "nav-mobile" : "")}>
      <Logo toggleMenu={toggleMenu} />
      <div className="navbar-wrapper">
        <MainMenu showMenu={showMenu} />
        <NavLink className="cart-icon" to="/cart" activeClassName="active"><FontAwesomeIcon icon={faShoppingBag} /></NavLink>
      </div>
    </nav>
  );

}

NavBar.propTypes = {
    showMenu: PropTypes.bool,
    toggleMenu: PropTypes.func
}

export default NavBar;