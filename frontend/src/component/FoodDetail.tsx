import React from 'react'
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { useAppDispatch, useAppSelector } from '../store';
import { loadOneFood } from '../redux/order/action';

export default function FoodDetail() {
    let match = useRouteMatch<{ id: string }>("/fooddetail/:id");

    const dispatch = useAppDispatch();

    dispatch(loadOneFood(`${match?.params.id}`))

    const foods = useAppSelector(state => state.order.foods)

    foods.splice(1);

    return (
        <div className='cartpage'>
            <NavLink to="/"><button className='checkout'>X</button></NavLink>
            <div>
      {foods.map(() => foods.find(food => food.id.toString() === match?.params.id)).map(food => (
        !food ? <p>no foods</p> :
          <div className='cartshow'>
            <div className='cartbox' key={food.id}>
              <p>{food.foodname}</p><p>${food.price}</p>
            </div>
          </div>
      ))}
            </div>
        </div>
    )
}
