import React from 'react';
import { PropTypes } from 'prop-types';
import uuid from 'uuidv4';

import Spinner from '../../common/Spinner/Spinner';
import PageTitle from '../../common/PageTitle/PageTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

const Summary = (props) => {

    const { cart, request } = props;

    if(request.pending || request.success === null)
    return (
        <div>
        <Spinner />
            <PageTitle>Order summary:</PageTitle>
            {cart.map(el =>
                <Row key={uuid()}>
                    <Col md={2}><img src={ el.img.src } alt="item" /></Col>
                    <Col md={4}>{ el.name }</Col>
                    <Col md={2}>${ el.price }</Col>
                    <Col md={2}>Qty: {el.qty}</Col>
                    <Col md={2}>Total: ${(el.price * el.qty).toFixed(2)}</Col>
                </Row>
            )}
        </div>
    );
}

Summary.propTypes = {
    cart: PropTypes.array.isRequired,
    request: PropTypes.object.isRequired,
}

export default Summary;