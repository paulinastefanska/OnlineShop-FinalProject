import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import uuid from 'uuidv4';

import Spinner from '../../common/Spinner/Spinner';
import PageTitle from '../../common/PageTitle/PageTitle';
import BackButton from '../../common/BackButton/BackButton';
import ModalPay from '../../features/ModalPay/ModalPay';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './CartSummary.scss';

const Summary = (props) => {

    const { cart, request, price, discountStatus } = props;

    if (request.pending === false && request.success === true && cart.length > 0) 
      return (
        <Container className="summary">
          <PageTitle>Order summary</PageTitle>
          <div className="summary-wrapper">
            <BackButton />
            <div className="scroll-wrapper">
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(el =>
                    <tr key={uuid()}>
                      <td>{ el.name }</td>
                      <td>${ el.price }</td>
                      <td>{el.qty}</td>
                      <td>${(el.price * el.qty).toFixed(2)}</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
            <div className="summary-footer">
                <span>Discount: {discountStatus ? '10%' : '0'}</span>
                <span>Grand total: ${price}</span>
                <div className="summary-buttons">
                  <Link to="/">
                    <Button color="info">
                      <FontAwesomeIcon className="back-icon" icon={faChevronLeft} />
                      Continue shopping
                    </Button>
                  </Link>
                  <ModalPay />
                </div>
            </div>
          </div>
        </Container>
      );

    else if(request.pending || request.success === null)
        return <Spinner />
}

Summary.propTypes = {
    cart: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    discountStatus: PropTypes.bool.isRequired,
    request: PropTypes.object.isRequired,
}

export default Summary;