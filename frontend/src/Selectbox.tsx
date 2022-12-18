import React, { useEffect } from 'react'
import logo from './logo.svg';
import { GrAddCircle } from 'react-icons/gr'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { loadFoods } from './redux/order/action';
import { useAppDispatch, useAppSelector } from './store';

export default function Selectbox() {
    const foods = useAppSelector(state=>state.order.foods)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadFoods())
    }, [dispatch])
    return (
        <div className='boxcontainer'>
            {foods.map(food => (
                <div className='box' key={food.id}>
                <img src={logo} alt="logo" />
                <p><span>{food.foodName}</span><span>$</span><span>{food.price}</span></p>
                <div className='amount'>
                    <button>
                        <AiOutlineMinusCircle />
                    </button>
                    <input type="text" value='0' name='amount' placeholder='0' />
                    <button>
                        <GrAddCircle />
                    </button>
                </div>
                <input type="submit" name="submit"></input>
            </div>
            ))}
            {/* <div className='box'>
                <img src={logo} alt="logo" />
                <p><span>tomato soup</span><span>$</span><span>50</span></p>
                <div className='amount'>
                    <button>
                        <AiOutlineMinusCircle />
                    </button>
                    <input type="text" value='0' name='amount' placeholder='0' />
                    <button>
                        <GrAddCircle />
                    </button>
                </div>
                <input type="submit" name="submit"></input>
            </div> */}
        </div>
    )
}
