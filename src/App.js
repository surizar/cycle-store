import './App.css';
import Navbar from './components/sitelayout/TopMenu/Navbar';
import {BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Contact from './components/pages/ContactUs/Contact';
import Cart from './components/pages/MyCart/Cart';
import Products from './components/pages/Products/Products';
import Search from './components/pages/Search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar/>
        </header>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>

    </Router>
  );
}

export default App;
