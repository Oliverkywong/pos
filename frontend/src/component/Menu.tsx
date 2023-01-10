import React, { Dispatch, SetStateAction } from 'react'
import { GrAddCircle } from 'react-icons/gr';
import { addToCart } from '../redux/cart/action';
import { useAppSelector, useAppDispatch } from '../store';
import logo from '../logo.svg';
import Siderbar from './Siderbar';
import { NavLink } from 'react-router-dom';

export default function Menu(props: {
    state: {
        animate: boolean,
        setAnimate: Dispatch<SetStateAction<boolean>>
    }
}) {
    const foods = useAppSelector(state => state.order.foods)
    const dispatch = useAppDispatch();

    return (
        <div className='selectboxmain'>
            <Siderbar />
            <div className='boxcontainer'>
                {foods.map(food => (
                    <NavLink to={`/fooddetail/${food.id}`} className='box' key={food.id}>
                        <img src={logo} alt="logo" />
                        <p>{food.foodname}</p>
                        <p>${food.price}</p>
                        <button onClick={(e) => {
                            dispatch(addToCart(food.id));
                            props.state.setAnimate(!props.state.animate)
                            e.preventDefault();
                        }}>
                            <GrAddCircle />
                        </button>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
