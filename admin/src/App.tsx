import React, { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [usn, setUsn] = useState('')
  const [pwd, setPwd] = useState('')

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const res = await await axios.post(`/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'username':usn, 'password':pwd }),
    });
    if (res.status === 200) {

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

export default App;
