import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import './css/login.css';

export default function Login() {

  const [usn, setUsn] = useState('')
  const [pwd, setPwd] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(`/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'username': usn, 'password': pwd }),
    });
    if (res.status === 201) {
      navigate('/edit')
    }
  }

  return (
    <div className="loginpage">
      <div className="loginbg"></div>
      <div className="logincard">
        <img src={logo} alt="logo" className="logo" />
        <h1>Admin Login</h1>
        <form className='loginform' onSubmit={handleSubmit}>
          <input type="text" value={usn} onChange={e => setUsn(e.currentTarget.value)}></input>
          <input type="password" value={pwd} onChange={e => setPwd(e.currentTarget.value)}></input>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
