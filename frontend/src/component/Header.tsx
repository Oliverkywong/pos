import React, { useEffect } from 'react'
import './css/header.css'
import { FiShoppingBag } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { loadFoods } from '../redux/order/action'
import { useAppSelector, useAppDispatch } from '../store'
import classNames from 'classnames'
import { loadCart } from '../redux/cart/action'

export default function Header(props: { animate: boolean, cartCount: number }) {
  // const cartCount = useAppSelector(state => state.cart.foodIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCart())
  }, [dispatch])
  console.log('cartCount', props.cartCount);

  return (
    <header>
      <div className="nav">
        <div></div>
        <p>menu</p>
        <NavLink to="/cart" >
          <div className={classNames(props.animate === true ? 'tt' : 'cart')}
            // onClick={() => dispatch(loadFoods())}
            data-content={props.cartCount === 0 ? null : props.cartCount}>
            <FiShoppingBag />
          </div>
        </NavLink>
      </div>
    </header>
  )
}
