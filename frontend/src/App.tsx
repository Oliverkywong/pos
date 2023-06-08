import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Menu from './page/Menu';
import Cart from './page/Cart';
import FoodDetail from './page/FoodDetail';

function App() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact />
        <Route path='/fooddetail' exact />
        <Route path='/fooddetail/:id' exact component={FoodDetail}/>
        <Route path='/cart' component={Cart} />
      </Switch>
        <Menu />
       
    </div>
  );
}

export default App;
