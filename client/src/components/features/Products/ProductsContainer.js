import { connect } from 'react-redux';
import { getProductsSort, getRequest, loadProductsByPageRequest, getPages, getpresentPage } from '../../../redux/productRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProductsSort(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getpresentPage(state),
})

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);