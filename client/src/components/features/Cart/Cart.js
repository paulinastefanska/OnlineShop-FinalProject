import React from 'react';
import CartOrder from './CartOrder';
import CartSummary from './CartSummary';

import "./Cart.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'reactstrap';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "summaryOrder": false
    }
  }

  initialSummary() {
    this.setState({
      "summaryOrder": true
    })
  }

  render() {
    if (this.state.summaryOrder === false) {
      return (
        <div className="cart">
          <CartOrder />
          <Row>
            <Col md={8}></Col>
            <Col md={4}>
              <Button onClick={() => { this.initialSummary() }}>Pay</Button>
            </Col>
          </Row>
        </div>
      );
    }

    else if (this.state.summaryOrder === true) {
      return (
        <CartSummary />
      );
    }
  }
};