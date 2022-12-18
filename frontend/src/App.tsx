import React from 'react';
import './App.css';
import Siderbar from './Siderbar';
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
      <div className='main'>
        <Siderbar />
        <Selectbox />
      </div>
    </div>
  );
}

export default App;
