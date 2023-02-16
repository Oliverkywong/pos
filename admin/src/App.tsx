import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Editpage from './Editpage';
import Login from './Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="edit" element={<Editpage />} />
      </Routes>
    </div>
  );
}

export default App;
