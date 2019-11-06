import { connect } from 'react-redux';
import { getRequest, loadSingleProductRequest, getSingleProduct, getCart, addToCart, plusQty, calculatePrice } from '../../../redux/productRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  products: getSingleProduct(state),
  cart: getCart(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  addToCart: (payload) => dispatch(addToCart(payload)),
  plusQty: (id) => dispatch(plusQty(id)),
  calculatePrice: () => dispatch(calculatePrice()),
  loadProducts: (id) => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);