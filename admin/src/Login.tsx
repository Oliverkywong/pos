import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [usn, setUsn] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate();
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      const res = await axios.post(`/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'username':usn, 'password':pwd }),
      });
      if (res.status === 201) {
        navigate('/edit')
      }
    }
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" value={usn} onChange={e => setUsn(e.currentTarget.value)}></input>
          <input type="password" value={pwd} onChange={e => setPwd(e.currentTarget.value)}></input>
          <input type="submit" />
        </form>
      </div>
    );
}
