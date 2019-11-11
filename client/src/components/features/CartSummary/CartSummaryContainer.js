import { connect } from 'react-redux';
import { getTotalPrice, getCart, getDiscountStatus, getRequest  } from '../../../redux/productRedux';

import CartSummary from './CartSummary';

const mapStateToProps = state => ({
    price: getTotalPrice(state),
    cart: getCart(state),
    discountStatus: getDiscountStatus(state),
    request: getRequest(state)
});


export default connect(mapStateToProps)(CartSummary);