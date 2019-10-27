import React from 'react';

import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';
import Products from '../../features/Products/ProductsContainer';
import TopCarousel from '../../../utils/Carousel/Carousel';
import ModalCode from '../../../utils/Modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'; 

const HomePage = () => (
  <Container>
    <TopCarousel />
    <ModalCode />
    <Row>
        <Col xs={3}>
            <ProductsCounter />
        </Col>
        <Col xs={9}>
            <Products />
        </Col>
    </Row>
  </Container>
);

export default HomePage;