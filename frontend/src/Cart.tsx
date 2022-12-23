import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { loadCart } from './redux/cart/action';
import { useAppSelector, useAppDispatch } from './store';
import logo from './logo.svg';

export default function Cart() {

  const cart = useAppSelector(state => state.cart.foodIds);
  const foods = useAppSelector(state => state.order.foods)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch])

  return (
    <div className='cartpage'>
      cart
      <NavLink to="/"><button className='checkout'>X</button></NavLink>
      {cart.map(cart => foods.find(food => food.id === cart)).map(food => (
        !food ? <p>no foods</p> :
          <div className='box' key={food.id}>
            <img src={logo} alt="logo" />
            <p>{food.foodname}</p><p>${food.price}</p>
          </div>
      ))}
    </div>
  )
}
