import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Review from './Component/Review/Review'
import Inventory from './Component/Inventory/Inventory'
import NotFound from './Component/NotFound/NotFound'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
    return (
      <div>
        <Header/>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop/>
            </Route>
            <Route path="/review">
              <Review/>
            </Route>
            <Route path="/inventory">
              <Inventory/>
            </Route>
            <Route exact path="/">
              <Shop/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
  export default App;