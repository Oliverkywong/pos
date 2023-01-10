import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import axios from 'axios';
import { Food } from "../redux/order/state";

export default function FoodDetail() {
  let match = useRouteMatch<{ id: string }>("/fooddetail/:id");
  const [food, setFood] = useState<Food>()

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(`/menu/${match?.params.id}`);
        if (res.status === 200) {
          console.log(res.data)
          setFood(res.data)
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [])

  return (
    <div className='cartpage'>
      <NavLink to="/"><button className='checkout'>X</button></NavLink>
      <div>
        {
          !food ? <p>no foods</p> :
            <div className='cartshow'>
              <div className='cartbox' key={food.id}>
                <p>{food.foodname}</p><p>${food.price}</p>
              </div>
            </div>
        }
      </div>
    </div>
  )
}
