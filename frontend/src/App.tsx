import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './page/Menu';
import Cart from './page/Cart';
import FoodDetail from './page/FoodDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Menu}/>
        <Route path='/fooddetail' exact />
        <Route path='/fooddetail/:id' exact component={FoodDetail}/>
        <Route path='/cart' component={Cart} />
      </Switch>
       
    </div>
  );
}

export default App;
