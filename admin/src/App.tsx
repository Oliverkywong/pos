import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Editpage from './Editpage';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="edit" element={<Editpage />} />
        <Route path="bar" element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
