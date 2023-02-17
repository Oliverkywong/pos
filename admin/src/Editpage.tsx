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
        // let fooddata:{
        //     foodname:string;
        //     description:string;
        //     price:number;
        //     type:string;
        //     foodpic:string;
        // } = {
        //   foodname: '',
        //   description: '',
        //   price: 0,
        //   type: '',
        //   foodpic: ''
        // }
        // fooddata.foodname = data.foodname
        // fooddata.description = data.description
        // fooddata.price = parseInt(data.price)
        // fooddata.type = data.type
        // fooddata.foodpic = data.foodpic[0]
        const formData = new FormData();
        formData.append('foodname', data.foodname)
        formData.append('description', data.description)
        formData.append('price', data.price)
        formData.append('type', data.type)
        formData.append('foodpic', data.foodpic[0])
        console.log(formData.get('foodpic')) // File {name: 'download0.jpeg', lastModified: 1676513530851, lastModifiedDate: Thu Feb 16 2023 10:12:10 GMT+0800 (Hong Kong Standard Time), webkitRelativePath: '', size: 14322, …}
        console.log(formData) // FormData {}
        
        const res = await axios.post(`/menu`, formData);
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
