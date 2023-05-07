import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Editpage from './Editpage';
import Login from './Login';
import Sidebar from './Sidebar';
import Foodpage from './Foodpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="edit" element={<Editpage />} />
        <Route path="bar" element={<Sidebar />} />
        <Route path="food" element={<Foodpage />} />
      </Routes>
    </div>
  );
}

export default App;
