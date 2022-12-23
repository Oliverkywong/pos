import React, { useEffect } from 'react'
import logo from './logo.svg';
import { GrAddCircle } from 'react-icons/gr'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { loadFoods } from './redux/order/action';
import { useAppDispatch, useAppSelector } from './store';
import { addToCart } from './redux/cart/action';

export default function Selectbox() {
    const foodsLoaded = useAppSelector(state => state.order.loadingState)
    const foods = useAppSelector(state => state.order.foods)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadFoods())
    }, [dispatch])
    return (
        <div className='boxcontainer'>
            {foods.map(food => (
                <div className='box' key={food.id}>
                    <img src={logo} alt="logo" />
                    <p>{food.foodname}</p><p>${food.price}</p>
                    <div className='amount'>
                        <button onClick={() => { dispatch(addToCart(food.id)) }}>
                            <AiOutlineMinusCircle />
                        </button>
                        <input type="text" value='0' name='amount' placeholder='0' />
                        <button onClick={() => { dispatch(addToCart(food.id)) }}>
                            <GrAddCircle />
                        </button>
                    </div>
                    {/* <input type="submit" name="submit"></input> */}
                </div>))}
        </div>
    )
}
