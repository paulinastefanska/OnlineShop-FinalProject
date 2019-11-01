import React from 'react';

import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';
import Products from '../../features/Products/ProductsContainer';
import TopCarousel from '../../features/Carousel/Carousel';
import ModalCode from '../../features/Modal/Modal';
import Sort from '../../features/Sort/SortContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'; 

const HomePage = () => (
  <Container>
    <TopCarousel />
    <ModalCode />
    <Row>
        <Col sm={4}>
          <Sort />
          <ProductsCounter />
        </Col>
        <Col sm={8}>
          <Products />
        </Col>
    </Row>
  </Container>
);

export default HomePage;