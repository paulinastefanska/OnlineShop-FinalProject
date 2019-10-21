import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// imports routes
import Home from './components/pages/Home/HomePage';
import Faq from './components/pages/Faq/FaqPage';
import StorePolicy from './components/pages/StorePolicy/StorePolicyPage';
import Contact from './components/pages/Contact/ContactPage';
import Cart from './components/pages/Cart/CartPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/storepolicy" exact component={StorePolicy} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};

export default App;
