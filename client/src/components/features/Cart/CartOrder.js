import React from 'react';
import { bindActionCreators } from 'redux';
import { cartQty, removeQty } from '../../../redux/productRedux';
import { connect } from 'react-redux';

// Import styles
import './Cart.scss';

export class CartOrder extends React.Component {
  createOrder() {
    return this.props.cart.productAdd.map((products) => {
      return (
        <div className="row" key={products.id}>
          <div className="col-2">
            <img src={products.img} alt="item" />
          </div>
          <div className="col-5">
            <h2>{products.name}</h2>
            <p>{products.desc}</p>
          </div>
          <div className="col-2">
            ${(products.price * products.qty).toFixed(2)}
          </div>
          <div className="col-3">
            <button onClick={() => this.props.removeQty(products)}>-</button>
            <p>{products.qty}</p>
            <button onClick={() => this.props.cartQty(products)}>+</button>
          </div>
        </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(CartOrder);