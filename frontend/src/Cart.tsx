import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { loadCart, removeFromCart } from './redux/cart/action';
import { useAppSelector, useAppDispatch } from './store';
import logo from './logo.svg';

export default function Cart() {

  const cart = useAppSelector(state => state.cart.foodIds);
  const foods = useAppSelector(state => state.order.foods)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch, cart])
  let tp = 0
  cart.map(cart => foods.find(food => food.id === cart)).map(food => (!food ? 0 : tp += food.price))

  return (
    <div className='cartpage'>
      cart
      <NavLink to="/"><button className='checkout'>X</button></NavLink>

      {tp}

      {cart.map(cartid=> foods.find(food => food.id === cartid)).map(food => (
        !food ? <p>no foods</p> :
          <div className='box' key={food.id}>
            {food.id}
            <img src={logo} alt="logo" />
            <p>{food.foodname}</p><p>${food.price}</p>
            <button onClick={() => { dispatch(removeFromCart(food.id)) }}>
              delete
            </button>
          </div>
      ))}
    </div>
  )
}
