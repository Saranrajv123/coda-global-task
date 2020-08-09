import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./Products/Pages/Home";
import ProductDetail from "./Products/Pages/ProductDetails/ProductDetail";

function App() {

  return (
    <div className="App">
      {/*<Home />*/}
      <Switch>
          <Route exact path="/:id" component={ProductDetail} />
          <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
