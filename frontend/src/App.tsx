import React from 'react';
import './App.css';
import Header from './Header';
import Selectbox from './Selectbox';
import { Switch, Route } from 'react-router-dom';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact />
        <Route path='/fooddetail' exact />
        <Route path='/fooddetail/:id' exact />
        <Route path='/cart' component={Cart} />
      </Switch>
      <Header />
      <Selectbox />
    </div>
  );
}

export default App;
