import React from 'react';
import { PropTypes } from 'prop-types';

import ProductsSummary from '../ProductsSummary/ProductsSummary';
import './ProductsList.scss'

const ProductsList = ({ products }) => (
  <div>
    <section className="products-list">
      {products.map(product => <ProductsSummary key={product.id} {...product} />)}
    </section>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
};

export default ProductsList;