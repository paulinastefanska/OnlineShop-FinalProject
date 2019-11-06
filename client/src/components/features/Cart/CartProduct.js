import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import CounterProducts from '../../common/CounterProducts/CounterProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

const CartProduct = (props) => {

    const { products, minusFromCounter, addToCounter, handleDeleteProduct } = props;

    const short = products.desc.split('');
    const lastIndex = short.lastIndexOf(' ', 130);
    const shortDesc = products.desc.substr(0, lastIndex) + '...';

    return (
        <Row className="cart-product">
            <Col md={2}>
                <Link target="_blank" to={'product/' + products.id}>
                    <img alt="item" src={`../../../images/${products.img}`} />
                </Link>
            </Col>
            <Col md={7}>
                <h4>{ products.name }</h4>
                <p>{ shortDesc }</p>
            </Col>
            <Col md={2}>${ products.price }</Col>
            <Col md={1}>
                <CounterProducts 
                    products={ products } 
                    minusFromCounter={ minusFromCounter } 
                    addToCounter={ addToCounter } 
                    handledeleteProduct={ handleDeleteProduct } 
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