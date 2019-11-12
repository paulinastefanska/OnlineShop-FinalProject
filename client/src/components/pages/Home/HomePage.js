import React from 'react';

import Products from '../../features/Products/ProductsContainer';
import TopCarousel from '../../features/Carousel/Carousel';
import ModalCode from '../../features/ModalDiscount/Modal';
import Sort from '../../features/Sort/SortContainer';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';

import './HomePage.scss';
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