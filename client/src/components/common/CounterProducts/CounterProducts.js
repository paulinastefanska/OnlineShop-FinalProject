import React from 'react';
import { PropTypes } from 'prop-types';

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
            <div>
                <div className="items-qty">
                    <button onClick={ this.minus }>-</button>
                    <p>{ products.qtyCount }</p>
                    <button onClick={ this.plus }>+</button>
                </div>
                <button onClick={ this.deleteProduct }>delete</button>
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