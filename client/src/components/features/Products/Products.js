import React from 'react';
import { PropTypes } from 'prop-types';

import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
  	const { products, request } = this.props;

    return (
      <div>
        {request.pending && <Spinner />}
        <ProductsList products={products} />
      </div>
    );
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