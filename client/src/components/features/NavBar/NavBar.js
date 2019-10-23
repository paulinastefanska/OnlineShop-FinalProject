import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Logo />
        <Link to='/'>Home</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/storepolicy'>Store Policy</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    );
  }

}

export default NavBar;