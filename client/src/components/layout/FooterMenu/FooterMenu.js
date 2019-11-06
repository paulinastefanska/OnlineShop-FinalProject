import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterMenu = () => (

    <ul className="footer-menu">
        <li><NavLink exact to="/" className="navlink">Home</NavLink></li>
        <li><NavLink exact to="/faq" className="navlink">FAQ</NavLink></li>
        <li><NavLink exact to="/storepolicy" className="navlink">Store Policy</NavLink></li>
        <li><NavLink exact to="/contact" className="navlink">Contact</NavLink></li>
        <li><NavLink exact to="/cart" className="navlink">Cart</NavLink></li>
    </ul>

);

export default FooterMenu;