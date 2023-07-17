import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './page/Menu';
import Cart from './page/Cart';
import FoodDetail from './page/FoodDetail';
import axios from 'axios';
import { useAppDispatch } from './store';
import { access } from './redux/auth/action';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/orderauth`)
      // console.log('order.action', res)
      dispatch(access(res.data.access_token))
    }
    fetchData()
  }, [])

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
