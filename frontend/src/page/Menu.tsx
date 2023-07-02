import React, { useEffect, useState } from 'react'
import './css/menu.css';
import { GrAddCircle } from 'react-icons/gr';
import { addToCart, loadCart } from '../redux/cart/action';
import { useAppSelector, useAppDispatch } from '../store';
import Siderbar from '../component/Siderbar';
import { NavLink } from 'react-router-dom';
import Header from '../component/Header';

export default function Menu() {

    const cartCount = useAppSelector(state => state.cart.foodIds);
    const foods = useAppSelector(state => state.order.foods)
    const dispatch = useAppDispatch();
    const [animate, setAnimate] = useState(false);

    const queryParameters = new URLSearchParams(window.location.search)
    const orderno = queryParameters.get("orderno")
    const token = queryParameters.get("token")
    console.log(queryParameters)
    console.log(orderno, token)

    useEffect(() => {
        console.log('cart', cartCount.length);
        dispatch(loadCart())
      }, [dispatch])

    return (
        <div className='selectboxmain'>
            <Siderbar />
            <div className='body'>
                <Header animate={animate} cartCount={cartCount.length} />
                <div className='boxcontainer'>
                    {foods.map(food => (
                        <NavLink to={`/fooddetail/${food.id}`} className='box' key={food.id}>
                            <img className='foodpic' crossOrigin="anonymous" src={`http://localhost:3000/menu/imgname/${food.foodpic}`} alt="foodpic" />
                            <p>{food.foodname}</p>
                            <p>${food.price}</p>
                            <button onClick={(e) => {
                                dispatch(addToCart(food.id));
                                setAnimate(!animate);
                                e.preventDefault();
                            }}>
                                <GrAddCircle />
                            </button>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}
