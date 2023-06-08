import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/Sidebar';

export default function Editpage() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [image, setImage] = useState<any>(null);

  const imghandle = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  
  return (
    <div className='editpage'>
      <Sidebar />
      <div className='editcontainer'>
      <h1>add food</h1>
      {image && <img src={image} alt="img"/>}
        <form className='editform' onSubmit={handleSubmit(async data => {
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
          foodpic: <input type='file' {...register('foodpic', { required: true })} onChange={imghandle}></input>
          foodname: <input {...register('foodname', { required: true })}></input>
          description: <input {...register('description', { required: true })}></input>
          price: <input type='number' {...register('price', { required: true })}></input>
          type: <input {...register('type', { required: true })}></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  )
}
