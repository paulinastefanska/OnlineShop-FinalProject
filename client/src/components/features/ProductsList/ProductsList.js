import React from 'react';
import { PropTypes } from 'prop-types';

import ProductsSummary from '../ProductsSummary/ProductsSummary';

const ProductsList = ({ products }) => (
  <div>
    <section className="products-list">
      {products.map(post => <ProductsSummary key={products.id} {...post} />)}
    </section>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default ProductsList;