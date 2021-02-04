import './App.css';

import Layout from './sitelayout/Layout/Layout';
import SingleProduct from './sitelayout/SingleProduct/SingleProduct';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/ContactUs/Contact';
import Cart from './components/pages/MyCart/Cart';
import Products from './components/pages/Products/Products';
import Search from './components/pages/Search/Search';
import NotFound from './components/pages/NotFound/NotFound'


import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:productId" component={SingleProduct} />
        <Route path="/search" component={Search} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </Layout>
  );
}

export default App;
