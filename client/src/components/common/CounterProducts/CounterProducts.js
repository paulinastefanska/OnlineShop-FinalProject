import React from 'react';
import { PropTypes } from 'prop-types';

import './CounterProducts.scss';

class CounterProducts extends React.Component {

    deleteProduct = () => {
        const { deleteProduct, products } = this.props;
        deleteProduct(products.id);
    }

    minus = () => {
        const { products, minusFromCounter } = this.props;
        minusFromCounter(products);
    }

    plus = () => {
        const { products, addToCounter } = this.props;
        addToCounter(products.id);
    }

    render() {
        const { products } = this.props;

        return (
            <div className="qty-items">
                <div className="qty-buttons">
                    <button className="qty-minus" onClick={ this.minus }>-</button>
                    <span className="qty-product">{ products.qty }</span>
                    <button onClick={ this.plus }>+</button>
                </div>
                <button className="btn-delete" onClick={ this.deleteProduct }>delete</button>
            </div>
        );
    }

}

CounterProducts.propTypes = {
    products: PropTypes.object.isRequired,
    addToCounter: PropTypes.func.isRequired,
    minusFromCounter: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
};

export default CounterProducts;