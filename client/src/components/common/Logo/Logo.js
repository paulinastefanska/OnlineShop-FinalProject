import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.png';

import './Logo.scss';

const Logo = () => {

	return (
		<div className="Logo">
			<Link className="logo" to ="/">
				<img src={logo} alt={'logo'}/>
			</Link>
		</div>
	)
};

export default Logo;
