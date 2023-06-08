import React, { useEffect } from 'react'
import './css/header.css'
import { FiShoppingBag } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { loadFoods } from '../redux/order/action'
import { useAppSelector, useAppDispatch } from '../store'
import classNames from 'classnames'

export default function Header(props: { animate: boolean }) {
  const cartCount = useAppSelector(state => state.cart.foodIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFoods())
  }, [dispatch])

  return (
    <header>
      <div className="nav">
        <div></div>
        <p>menu</p>
        <NavLink to="/cart" >
          <div className={classNames(props.animate === true ? 'tt' : 'cart')}
            onClick={() => dispatch(loadFoods())}
            data-content={cartCount.length === 0 ? null : cartCount.length}>
            <FiShoppingBag />
          </div>
        </NavLink>
      </div>
    </header>
  )
}
