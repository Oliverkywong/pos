import React from 'react'
import { NavLink } from 'react-router-dom'
import { removeFromCart } from './redux/cart/action';
import { useAppSelector, useAppDispatch } from './store';
import logo from './logo.svg';

export default function Cart() {

  const cart = useAppSelector(state => state.cart.foodIds);
  const foods = useAppSelector(state => state.order.foods)
  const dispatch = useAppDispatch();

  let tp = 0
  cart.map(cart => foods.find(food => food.id === cart)).map(food => (!food ? 0 : tp += food.price))

  const count = cart.reduce((accumulator: any, value: number) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  return (
    <div className='cartpage'>
      cart
      <NavLink to="/"><button className='checkout'>X</button></NavLink>
      <div>
        <p>total price: {tp}</p>
      </div>
      {Object.keys(count).map(cartid => foods.find(food => food.id.toString() === cartid.toString())).map(food => (
        !food ? <p>no foods</p> :
          <div className='box' key={food.id}>
            <img src={logo} alt="logo" />
            <p>{food.foodname}</p><p>${food.price}</p>
            <button onClick={() => { dispatch(removeFromCart(food.id)) }}>
              delete
            </button>
            x {count[food.id]}
          </div>
      ))}
    </div>
  )
}
