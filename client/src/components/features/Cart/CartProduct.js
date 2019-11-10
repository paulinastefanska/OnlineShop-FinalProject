import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import CounterProducts from '../../common/CounterProducts/CounterProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

const CartProduct = (props) => {

    const { products, minusFromCounter, addToCounter, handleDeleteProduct } = props;

    const short = products.desc.split('');
    const lastIndex = short.lastIndexOf(' ', 100);
    const shortDesc = products.desc.substr(0, lastIndex) + '...';

    return (
        <Row className="cart-product">
            <Col md={2}>
                <Link to={'product/' + products.id}>
                    <img src={products.img.src} alt="item" />
                </Link>
            </Col>
            <Col md={6}>
                <h5>{ products.name }</h5>
                <p className="cart-short-text">{ shortDesc }</p>
            </Col>
            <Col md={2} className="product-price">${ products.price }</Col>
            <Col md={2}>
                <CounterProducts 
                    products={ products } 
                    minusFromCounter={ minusFromCounter } 
                    addToCounter={ addToCounter } 
                    deleteProduct={ handleDeleteProduct } 
                />
            </Col>
        </Row>
    );
} 

CartProduct.propTypes = {
    products: PropTypes.object.isRequired,
    minusFromCounter: PropTypes.func.isRequired,
    addToCounter: PropTypes.func.isRequired,
    handleDeleteProduct: PropTypes.func.isRequired,
}

export default CartProduct;