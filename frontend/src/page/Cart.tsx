import React, { useEffect } from 'react'
import './css/cart.css';
import { NavLink } from 'react-router-dom'
import { removeFromCart } from '../redux/cart/action';
import { useAppSelector, useAppDispatch } from '../store';
import { loadFoods } from '../redux/order/action';

export default function Cart() {

  const cart = useAppSelector(state => state.cart.foodIds);
  const foods = useAppSelector(state => state.order.foods)
  const dispatch = useAppDispatch();

  let totalPrice = 0
  cart.map(cart => foods.find(food => food.id === cart)).map(food => (!food ? 0 : totalPrice += food.price))

  const count = cart.reduce((accumulator: any, value: number) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  useEffect(() => {
    dispatch(loadFoods())
  }, [dispatch])
  
  return (
    <div className='cartpage'>
      cart
      <NavLink to="/"><button className='checkout'>X</button></NavLink>
      <div>
        <p>total price: {totalPrice}</p>
      </div>
      {Object.keys(count).map(cartid => foods.find(food => food.id.toString() === cartid.toString())).map(food => (
        !food ? <p>no foods</p> :
          <div className='cartshow'>
            <div className='cartbox' key={food.id}>
              <img className='foodpic' crossOrigin="anonymous" src={`http://localhost:3000/menu/imgname/${food.foodpic}`} alt="foodpic" />
              <p>{food.foodname}</p><p>${food.price}</p>
              <NavLink to="/">
                <button onClick={() => { dispatch(removeFromCart(food.id)) }}>
                delete
              </button>
              </NavLink>
            </div>
            <p>x {count[food.id]}</p>
          </div>
      ))}
    </div>
  )
}
