import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import '../Faq/FaqPage.scss'

const FaqPage = () => (
	<Container className="faq">
		<PageTitle>FAQ</PageTitle>
		<div className="faq-wrapper">
			<p>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
			<p>
				A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
				lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
				eget nunc scelerisque viverra. Odio euismod lacinia at quis risus.
			</p>
			<p>Q: Eu lobortis elementum nibh tellus molestie nunc?</p>
			<p>
				A: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
				lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
				eget nunc scelerisque viverra. Odio euismod lacinia at quis.
			</p>
			<p>Q: Odio euismod lacinia at quis?</p>
			<p>
				A: Eu lobortis elementum nibh tellus molestie nunc. Amet venenatis urna cursus
				eget nunc scelerisque viverra. Odio euismod lacinia at quis. Sed do eiusmod 
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
	</Container>
);

export default FaqPage;