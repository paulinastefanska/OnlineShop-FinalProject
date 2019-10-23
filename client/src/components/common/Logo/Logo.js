import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
	<Link className="logo" to ="/">
  	<h1>Products store</h1>
  </Link>
);

export default Logo;
