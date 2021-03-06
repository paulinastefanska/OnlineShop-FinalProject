import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './ContactPage.scss';

const ContactPage = () => (
	<Container className="contact">
		<PageTitle>Contact</PageTitle>
			<div className="contact-wrapper">
				<p><strong>TechStore</strong></p>
				<p><i>9432 Division Street</i></p>
				<p><i>Stone Mountain, GA 30083</i></p>
				<p>E-mail: <FontAwesomeIcon icon={faEnvelope} /> office@techstore.com</p>
				<p>Mobile Number: <FontAwesomeIcon icon={faMobileAlt} /> 207-914-3411</p>
				<div className="social-media">
					<a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></a>
					<a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
					<a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
					<a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
				</div>
			</div>
	</Container>
);


export default ContactPage;