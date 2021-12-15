
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ProductDetail from './Pages/ProductsDetails/ProductDetail.js/ProductDetail';
import ProductsList from './Pages/ProductsDetails/ProductsDetails';
import Register from './Pages/Login/Register/Register';

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
          {/* <Route >
            <ProductsList />
          </Route> */}
          {/* <Route>
            <ProductDetail />
          </Route> */}
          <Route>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
