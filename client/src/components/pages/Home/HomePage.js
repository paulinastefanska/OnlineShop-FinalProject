import React from 'react';

import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';
import Products from '../../features/Products/ProductsContainer';
import './HomePage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => (
  <div className="home-page row">
  	<div className="col-sm-3">
  		<ProductsCounter />
  	</div>
  	<div className="col-sm-9">
    	<Products />
    </div>
  </div>
);

export default HomePage;