import { connect } from 'react-redux';
import { getProductsCounter } from '../../../redux/productRedux';
import ProductsCounter from './ProductsCounter';

const mapStateToProps = state => ({
  counter: getProductsCounter(state)
});

export default connect(mapStateToProps)(ProductsCounter);