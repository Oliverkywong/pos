import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Editpage() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  return (
    <div>
      <h1>add food</h1>
      <form onSubmit={handleSubmit(async data => {
        let fooddata:{
            foodname:string;
            description:string;
            price:number;
            type:string;
            foodpic:string;
        } = {
          foodname: '',
          description: '',
          price: 0,
          type: '',
          foodpic: ''
        }
        fooddata.foodname = data.foodname
        fooddata.description = data.description
        fooddata.price = parseInt(data.price)
        fooddata.type = data.type
        fooddata.foodpic = data.foodpic[0].name
        // const formData = new FormData();
        // formData.append('foodname', data.foodname)
        // formData.append('description', data.description)
        // formData.append('price', data.price)
        // formData.append('type', data.type)
        // formData.append('foodpic', data.foodpic[0])
        console.log(fooddata)
        const res = await axios.post(`/menu`, fooddata);
        if (res.status === 201) {
          navigate('/edit')
        }
      })}>
        foodpic: <input type='file' {...register('foodpic', {required:true})}></input>
        foodname: <input {...register('foodname', {required:true})}></input>
        description: <input {...register('description', {required:true})}></input>
        price: <input type='number' {...register('price', {required:true})}></input>
        type: <input {...register('type', {required:true})}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}
