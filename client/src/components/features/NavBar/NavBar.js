import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss'

class NavBar extends React.Component {

  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/faq', title: 'FAQ' },
      { path: '/storepolicy', title: 'Store Policy' },
      { path: '/contact', title: 'Contact' },
    ]
  }

  render() {
    const { links } = this.state;

    return (
      <nav className="navbar">
        <Logo />
        <MainMenu links={links} />
        <Link className="cart-icon" to="/cart"><FontAwesomeIcon icon={faShoppingBag} size="2x" /></Link>
      </nav>
    );
  }

}

export default NavBar;