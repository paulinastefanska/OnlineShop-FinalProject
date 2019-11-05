import React from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import './App.scss'

// imports routes
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Faq from './components/pages/Faq/FaqPage';
import StorePolicy from './components/pages/StorePolicy/StorePolicyPage';
import Contact from './components/pages/Contact/ContactPage';
import Cart from './components/pages/Cart/CartPage';
import SingleProduct from './components/pages/SingleProduct/SingleProductPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
			  >
          <Route exact path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/storepolicy" component={StorePolicy} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route component={NotFound} />
        </AnimatedSwitch>
      </MainLayout>
    );
  }

};

export default App;
