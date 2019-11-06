import { connect } from 'react-redux';
import { getCart, getTotalPrice, plusQty, minusQty, deleteFromCart, getDiscountCode, makeDiscount, getDiscountStatus, 
    calculatePrice } from '../../../redux/productRedux';

import Cart from './Cart';

const mapStateToProps = state => ({
    cart: getCart(state),
    price: getTotalPrice(state),
    discountCode: getDiscountCode(state),
    discountStatus: getDiscountStatus(state)
});

const mapDispatchToProps = dispatch => ({
    addToCounter: (id) => dispatch(plusQty(id)),
    minusFromCounter: (id) => dispatch(minusQty(id)),
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    makeDiscount: () => dispatch(makeDiscount()),
    calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);