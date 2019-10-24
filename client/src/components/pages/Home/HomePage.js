import React from 'react';

import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';
import Products from '../../features/Products/ProductsContainer';

const HomePage = () => (
  <div>
  	<ProductsCounter />
    <Products />
  </div>
);

export default HomePage;