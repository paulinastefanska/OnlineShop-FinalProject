import React from 'react';
import { connect } from 'react-redux';

// Import styles
import './Cart.scss';

export class CartSummary extends React.Component {
  summary() {
    return this.props.cart.productAdd.map((products) => {
      return (
        <div className="row" key={products.id}>
          <div className="col-6">{products.name}</div>
          <div className="col-2">{products.qty}</div>
          <div className="col-2">${products.price.toFixed(2)}</div>
          <div className="col-2">${(products.price * products.qty).toFixed(2)}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="cart-summary">
        <h1>Your order</h1>
        <div className="row">
          <div className="col-6">Name</div>
          <div className="col-2">Quantity</div>
          <div className="col-2">Price</div>
          <div className="col-2">Total price</div>
        </div>
        {this.summary()}
        <div className="row">
          <div className="col-10">TOTAL</div>
          <div className="col-2">${this.props.cart.summary.toFixed(2)}</div>
        </div>
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