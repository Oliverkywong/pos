import classNames from 'classnames'
import React, { useEffect } from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { loadFoods } from '../redux/order/action'
import { useAppSelector, useAppDispatch } from '../store'
import logo from '../logo.svg';

export default function Header(props:{animate:boolean}) {
    const cartCount = useAppSelector(state => state.cart.foodIds);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
        dispatch(loadFoods())
    }, [dispatch])

  return ( 
  <header>
    <div className="nav">
        <NavLink to="/"><img src={logo} alt="logo" className="logo" /></NavLink>
        <p>menu</p>
        <NavLink to="/cart" className={classNames(props.animate === false ? 'tt' : 'cart')}
            onClick={() => dispatch(loadFoods())} 
            data-content={cartCount.length === 0 ? null : cartCount.length}>
            <FiShoppingBag />
        </NavLink>
    </div>
</header>
  )
}
