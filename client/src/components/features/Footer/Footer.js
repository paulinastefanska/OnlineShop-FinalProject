import React from 'react';

import { Container } from 'reactstrap'; 
import FooterMenu from '../../layout/FooterMenu/FooterMenu';
import './Footer.scss';

const Footer = () => (
  <Container>
    <footer className="footer">
        <p className="copy">&copy;2019 <a href="https://github.com/paulinastefanska"><b>Paulina Stefańska</b></a></p>
        <FooterMenu />
    </footer>
  </Container>
);

export default Footer;