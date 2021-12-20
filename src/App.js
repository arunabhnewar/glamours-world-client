
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ProductDetail from './Pages/ProductsDetails/ProductDetail.js/ProductDetail';
import ProductsList from './Pages/ProductsDetails/ProductsList';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          <Route >
            <ProductsList />
          </Route>
          {/* <Route>
            <ProductDetail />
          </Route> */}
          {/* <Route>
            <Cart />
          </Route> */}
          {/* <Route>
            <Register />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
