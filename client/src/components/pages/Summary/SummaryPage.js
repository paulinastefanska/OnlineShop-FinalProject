import React from 'react';
import { PropTypes } from 'prop-types';

import CartSummary from '../../features/CartSummary/CartSummary';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';

class SummaryPage extends React.Component {

    render() {
        const { cart, discountStatus, price, request } = this.props;
        
        return (
            <div>
                <CartSummary cart={cart} request={request} />
                <div>
                    <h5>Discount: {discountStatus ? '10%' : '0'}</h5>
                    <h4>Grand total: ${price}</h4>
                    <Button>Pay</Button>
                </div>
            </div>
        );
    }

    
}

SummaryPage.propTypes = {
    cart: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    discountStatus: PropTypes.bool.isRequired,
    cartSummary: PropTypes.func.isRequired,
    orderStatus: PropTypes.bool.isRequired,
    request: PropTypes.object.isRequired,
}

export default SummaryPage;