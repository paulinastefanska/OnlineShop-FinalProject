import { connect } from 'react-redux';
import { getProductsSort, getRequest, loadProductsByPageRequest, getPages, getPresentPage } from '../../../redux/productRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProductsSort(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getPresentPage(state),
})

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);