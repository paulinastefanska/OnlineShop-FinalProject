import React from 'react';
import { PropTypes } from 'prop-types';

import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

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
        return <Alert variant={'error'} children={request.error} />

      else if (request.pending === false && request.success === true && products.length === 0) 
        return <Alert variant={'info'} children={'- no posts -'} />
  }

};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default Products;