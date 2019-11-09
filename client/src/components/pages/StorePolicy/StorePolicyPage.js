import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import './StorePolicyPage.scss'

const StorePolicy = () => (
	<Container className="storepolicy">
		<PageTitle>Store Policy</PageTitle>
		<div className="storepolicy-wrapper">
			<p>$1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
				lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
				eget nunc scelerisque viverra. Odio euismod lacinia at quis risus.
			</p>
			<p>$1.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
				lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
				eget nunc scelerisque viverra. Odio euismod lacinia at quis risus.
			</p>
			<p>$1.2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
				lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
				eget nunc scelerisque viverra. Odio euismod lacinia at quis risus.
			</p>
			<p>$1.3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
				lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
				eget nunc scelerisque viverra. Odio euismod lacinia at quis risus.
			</p>
		</div>
	</Container>

);

export default StorePolicy;