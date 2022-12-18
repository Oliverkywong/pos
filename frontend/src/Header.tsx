import React, { useEffect } from 'react'
import logo from './logo.svg';
import { FiShoppingBag } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import { loadCart } from './redux/cart/action';

export default function Header() {

    const cartLoaded = useAppSelector(state => state.cart.loading)
    const cartCount = useAppSelector(state => state.cart.foodIds);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadCart());
    }, [dispatch])
    
    return (
        <header>
            <div className="nav">
                <NavLink to="/"><img src={logo} alt="logo" className="logo" /></NavLink>
                <p>menu</p>
                <NavLink to="/cart"><FiShoppingBag className="cart" />{cartCount.length !== 0  && cartCount.length}</NavLink>
            </div>
        </header>
    )
}
