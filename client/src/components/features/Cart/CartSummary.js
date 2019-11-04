import React from 'react';
import { connect } from 'react-redux';

import './Cart.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'reactstrap';

export class CartSummary extends React.Component {
  summary() {
    return this.props.cart.productAdd.map((products) => {
      return (
        <Row key={products.id}>
          <Col md={6}>{products.name}</Col>
          <Col md={2}>{products.qty}</Col>
          <Col md={2}>${products.price.toFixed(2)}</Col>
          <Col md={2}>${(products.price * products.qty).toFixed(2)}</Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <div className="cart-summary">
        <h1>Your order</h1>
        <Row>
          <Col md={6}>Name</Col>
          <Col md={2}>Quantity</Col>
          <Col md={2}>Price</Col>
          <Col md={2}>Total price</Col>
        </Row>
        {this.summary()}
        <Row>
          <Col md={10}>TOTAL</Col>
          <Col md={2}>${this.props.cart.summary.toFixed(2)}</Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartSummary);