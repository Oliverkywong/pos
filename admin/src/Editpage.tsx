import axios from 'axios';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Editpage() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  return (
    <div>
      <h1>add food</h1>
      <form onSubmit={handleSubmit(async data => {
        const formData = new FormData();
        formData.append('foodname', data.foodname)
        formData.append('description', data.description)
        formData.append('price', data.price)
        formData.append('type', data.type)
        formData.append('pic', data.pic[0])

        const res = await axios.post(`/edit`, {
          method: "POST",
          body: formData
        });
        if (res.status === 200) {
          navigate('/edit')
        }
      })}>
        foodname: <input {...register('foodname')}></input>
        description: <input type="password" {...register('description')}></input>
        price: <input {...register('price')}></input>
        type: <input {...register('type')}></input>
        pic: <input {...register('pic')}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}
