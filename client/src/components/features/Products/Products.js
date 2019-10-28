import React from 'react';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'reactstrap';

import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
  	const { products, request } = this.props;

    if (request.pending === false && request.success === true && products.length > 0) 
          return <ProductsList products={products} />

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
  loadProducts: PropTypes.func.isRequired,
};

export default Products;