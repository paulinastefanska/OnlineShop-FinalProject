import React from 'react';

import ProductsCounter from '../../features/ProductsCounter/ProductsCounter';
import Products from '../../features/Products/Products';

const HomePage = () => (
  <div>
    <ProductsCounter />
    <Products />
  </div>
);

export default HomePage;