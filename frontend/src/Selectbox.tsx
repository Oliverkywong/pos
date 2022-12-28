import React, { useEffect } from 'react'
import logo from './logo.svg';
import { GrAddCircle } from 'react-icons/gr'
import { loadFoods } from './redux/order/action';
import { useAppDispatch, useAppSelector } from './store';
import { addToCart } from './redux/cart/action';

export default function Selectbox() {
    // const foodsLoaded = useAppSelector(state => state.order.loadingState)
    const foods = useAppSelector(state => state.order.foods)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadFoods())
    }, [dispatch])

    return (
        <div className='selectboxmain'>

            <div className='siderbar'>
                <div onClick={()=>dispatch(loadFoods())}>
                    <img src={logo} alt="logo" />
                    <p>all</p>
                </div>
                <div onClick={()=>dispatch(loadFoods('/soup'))}>
                    <img src={logo} alt="logo" />
                    <p>soup</p>
                </div>
                <div onClick={()=>dispatch(loadFoods('/salad'))}>
                    <img src={logo} alt="logo" />
                    <p>salad</p>
                </div>
                <div onClick={()=>dispatch(loadFoods('/food'))}>
                    <img src={logo} alt="logo" />
                    <p>food</p>
                </div>
                <div onClick={()=>dispatch(loadFoods('/drink'))}>
                    <img src={logo} alt="logo" />
                    <p>drink</p>
                </div>
            </div>

            <div className='boxcontainer'>
                {foods.map(food => (
                    <div className='box' key={food.id}>
                        <img src={logo} alt="logo" />
                        <p>{food.foodname}</p><p>${food.price}</p>
                        <div className='amount'>
                            <button onClick={() => { dispatch(addToCart(food.id)) }}>
                                <GrAddCircle />
                            </button>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
