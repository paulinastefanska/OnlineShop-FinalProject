import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';

import PageTitle from '../../common/PageTitle/PageTitle';
import CartProduct from './CartProduct';
import "./Cart.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class Cart extends React.Component {

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
      products.qty === 1 ? void(0) : minusFromCounter(products.id);
      calculatePrice();
  }

  plusCounter = (id) => {
      const { addToCounter, calculatePrice } = this.props;
      addToCounter(id);
      calculatePrice();
  }

  render() {
    const { cart, price, discountCode, discountStatus } = this.props;

    return (
      <Container className="cart">
        <PageTitle>Shopping Cart</PageTitle>
        <div className="cart-wrapper">
          {cart.length !== 0 ? cart.map(el => 
            <CartProduct
                key={uuid()}
                minusFromCounter={this.minusCounter}
                addToCounter={this.plusCounter}
                handleDeleteProduct={this.handleDeleteProduct}
                products={el}
            />) : <Alert color="danger">Your shopping cart is empty!</Alert> }
        </div>
        <div className="cart-summary">
          <InputGroup>
            <Input placeholder="discount code" />
            <InputGroupAddon addonType="append">
              <Button color="info">Done!</Button>
            </InputGroupAddon>
          </InputGroup>
          <p>Total: ${price.toFixed(2)}</p>

          {cart.length !== 0 ? 
          <Button color="info">Summary</Button> :
          <Button color="info" disabled>Summary</Button> 
          }
          
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