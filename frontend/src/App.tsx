import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cart from './component/Cart';
import Header from './component/Header';
import Menu from './component/Menu';

function App() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact />
        <Route path='/fooddetail' exact />
        <Route path='/fooddetail/:id' exact />
        <Route path='/cart' component={Cart} />
      </Switch>
        <Header animate={animate}/>
        <Menu state={{animate:animate,setAnimate:setAnimate}}/>
       
    </div>
  );
}

export default App;
