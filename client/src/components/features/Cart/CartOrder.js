import React from 'react';
import { bindActionCreators } from 'redux';
import { cartQty, removeQty } from '../../../redux/productRedux';
import { connect } from 'react-redux';

import './Cart.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'reactstrap';

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { cartQty, removeQty }, dispatch
  );
}

export class CartOrder extends React.Component {
  createOrder() {
    return this.props.cart.productAdd.map((products) => {
      return (
        <Row key={products.id}>
          <Col md={2}>
            <img src={products.img} alt="item" />
          </Col>
          <Col md={5}>
            <h2>{products.name}</h2>
            <p>{products.desc}</p>
          </Col>
          <Col md={2}>
            ${(products.price * products.qty).toFixed(2)}
          </Col>
          <Col md={3}>
            <Button onClick={() => this.props.removeQty(products)}>-</Button>
            <p>{products.qty}</p>
            <Button onClick={() => this.props.cartQty(products)}>+</Button>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Your shopping:</h1>
        {this.createOrder()}
        <div>
          <input placeholder="discount code" />
        </div>
        <div>
          <div>Total: ${this.props.cart.summary.toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(CartOrder);