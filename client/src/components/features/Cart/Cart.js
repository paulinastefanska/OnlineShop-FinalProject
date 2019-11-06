import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';

import PageTitle from '../../common/PageTitle/PageTitle';
import CartProduct from './CartProduct';
import "./Cart.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert, Button, Input } from 'reactstrap';

class Cart extends React.Component {
  constructor(props) {
      super(props);
  }

  handleDiscount = () => {
      const { makeDiscount, calculatePrice } = this.props;
      makeDiscount();
      calculatePrice();
  }

  handleDeleteProduct = (id) => {
      const { deleteFromCart, calculatePrice } = this.props;
      deleteFromCart(id);
      calculatePrice();
  }

  minusCounter = (products) => {
      const { minusFromCounter, calculatePrice } = this.props;
      products.qtyCount === 1 ? void(0) : minusFromCounter(products.id);
      calculatePrice();
  }

  plusCounter = (id) => {
      const { addToCounter, calculatePrice } = this.props;
      addToCounter(id);
      calculatePrice();
  }

  onPageChange = (pageNumber) => {
      this.setState({ page: pageNumber });
  }

  render() {
    const { cart, price, discountCode, discountStatus } = this.props;

    return (
      <Container className="cart">
        <PageTitle>Shopping Cart</PageTitle>
        <Row className="cart-wrapper">
          <Col md={12}>
            {cart.length !== 0 ? cart.map(el => 
              <CartProduct
                  key={uuid()}
                  minusFromCounter={this.minusQty}
                  addToCounter={this.plusQty}
                  handleDeleteProduct={this.handleDeleteProduct}
                  products={el}
              />) : <Alert color="danger">Your shopping cart is empty!</Alert> }
          </Col>
        </Row>
        <div className="cart-summary">
          <Input placeholder="discount code" />
          <p>Total: ${price.toFixed(2)}</p>
          <Button>Summary</Button>
        </div>
      </Container>
    );
  }
}

Cart.propTypes = {
    deleteFromCart: PropTypes.func.isRequired,
    minusFromCounter: PropTypes.func.isRequired,
    addToCounter: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    discountCode: PropTypes.string.isRequired,
    makeDiscount: PropTypes.func.isRequired,
    discountStatus: PropTypes.bool.isRequired,
    calculatePrice: PropTypes.func.isRequired
}
    
export default Cart;