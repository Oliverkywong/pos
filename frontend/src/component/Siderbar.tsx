import React, { useEffect } from 'react'
import './css/siderbar.css'
import { loadFoods } from '../redux/order/action'
import logo from '../logo.svg';
import { useAppDispatch } from '../store';
import { NavLink } from 'react-router-dom';

export default function Siderbar() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadFoods())
    }, [dispatch])

    return (
        <div className='siderbar'>
            <div className='top'>
                <NavLink to="/">
                    <img src={logo} alt="logo" className="logo" />
                </NavLink>
            </div>
            <div className='list'>
                <div onClick={() => dispatch(loadFoods())}>
                    <img src={logo} alt="logo" />
                    <p>all</p>
                </div>
                <div onClick={() => dispatch(loadFoods('/soup'))}>
                    <img src={logo} alt="logo" />
                    <p>soup</p>
                </div>
                <div onClick={() => dispatch(loadFoods('/salad'))}>
                    <img src={logo} alt="logo" />
                    <p>salad</p>
                </div>
                <div onClick={() => dispatch(loadFoods('/food'))}>
                    <img src={logo} alt="logo" />
                    <p>food</p>
                </div>
                <div onClick={() => dispatch(loadFoods('/drink'))}>
                    <img src={logo} alt="logo" />
                    <p>drink</p>
                </div></div>
            {/* <div className='bottom'>bottom</div> */}
        </div>
    )
}
