import { connect } from 'react-redux';
import { getTotalPrice, getCart, getDiscountStatus, cartSummary, getOrderStatus, getRequest } from '../../../redux/productRedux/productReducer';

import SummaryPage from './SummaryPage';

const mapStateToProps = state => ({
    price: getTotalPrice(state),
    cart: getCart(state),
    discountStatus: getDiscountStatus(state),
    orderStatus: getOrderStatus(state),
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    cartSummary: (cart, price) => dispatch(cartSummary(cart, price))
});


export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);