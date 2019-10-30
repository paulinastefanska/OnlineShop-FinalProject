import React from 'react';
import { PropTypes } from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'reactstrap';

import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Pagination from '../../common/Pagination/Pagination';

class Products extends React.Component {

  componentDidMount() {
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage);
  }

  loadProductsPage = (page) => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  }

  render() {
    const { products, request, pages, presentPage } = this.props;
    const { loadProductsPage } = this;
    let { pagination } = this.props;

    if (pagination === undefined) {
        pagination = true
    }

    if (request.pending === false && request.success === true && products.length > 0) 
        return (
          <div> 
            <ProductsList products={products} />
            { pagination && <Pagination pages={pages} onPageChange={loadProductsPage} initialPage={presentPage} /> }
          </div>
        );

      else if (request.pending === true || request.success === null) 
        return <Spinner />

      else if (request.pending === false && request.error !== null) 
        return <Alert color="danger">{request.error}</Alert>

      else if (request.pending === false && request.success === true && products.length === 0) 
        return <Alert color="info">- no products -</Alert>
  }

};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired,
};

Products.defaultProps = {
  initialPage: 1,
  productsPerPage: 6,
  pagination: true
};

export default Products;