import React, { useEffect } from 'react'
import './css/cart.css';
import { NavLink } from 'react-router-dom'
import { loadCart, removeFromCart } from '../redux/cart/action';
import { useAppSelector, useAppDispatch } from '../store';
import { loadFoods } from '../redux/order/action';
import { LoadingState } from '../model';
import axios from 'axios';

export default function Cart() {

  const cartLoaded = useAppSelector(state => state.cart.loading);
  const cart = useAppSelector(state => state.cart.foodIds);
  const foods = useAppSelector(state => state.order.foods)
  const dispatch = useAppDispatch();

  const current = new Date();
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const moth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec'];
  const min = current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes();
  const sec = current.getSeconds() < 10 ? '0' + current.getSeconds() : current.getSeconds();
  const date = `${day[current.getDay()]} ${current.getDate()} ${moth[current.getMonth()]}, ${current.getFullYear()} `;
  const time = `${current.getHours()}:${min}:${sec}`

  let totalPrice = 0
  cart.map(cart => foods.find(food => food.id === cart)).map(food => (!food ? 0 : totalPrice += food.price))

  const count = cart.reduce((accumulator: any, value: number) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  useEffect(() => {
    console.log('foods', foods);
    dispatch(loadFoods())
    dispatch(loadCart())
  }, [dispatch])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(`/cartpay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'ordernum': 1, 'orderfood': cart }),
    });
    if (res.status === 201) {
      // navigate('/')
    }
  }

  return (
    <div className='cartpage'>
      <div className='cartheader'>
        Order Bill
        <div className='cartheaderend'>
          <div className='carttimefromat'>
            <span className='cartdate'>{date}</span>
            <span className='carttime'>{time}</span>
          </div>
          <NavLink to="/">
            <button className='checkout'>X</button>
          </NavLink>
        </div>
      </div>
      {
        cartLoaded === LoadingState.Loaded ? <p> loading </p> :
          Object.keys(count).map(cartid => foods.find(food => food.id.toString() === cartid.toString())).map(food => (
            !food ? <p>no foods</p> :
              <div className='cartshow'>
                <div className='cartbox' key={food.id}>
                  <img className='foodpic' crossOrigin="anonymous" src={`http://localhost:3000/menu/imgname/${food.foodpic}`} alt="foodpic" />
                  <p>{food.foodname}</p><p>${food.price}</p>
                  <NavLink to="/">
                    <button onClick={() => {
                      dispatch(loadCart());
                      dispatch(removeFromCart(food.id))
                    }}>
                      delete
                    </button>
                  </NavLink>
                </div>
                <p>x {count[food.id]}</p>
              </div>
          ))}
      <div className='totalprice'>
        <p>total price: {totalPrice}</p>
      </div>
      <div className='cartpay'>
        <form className='cartpayform' onSubmit={handleSubmit}>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}
