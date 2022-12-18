import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Cart() {
  return (
    <div className='cartpage'>
        <NavLink to="/"><button className='checkout'>X</button></NavLink>
        Cart
    </div>
  )
}
