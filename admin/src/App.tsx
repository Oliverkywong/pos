import React from 'react';
import './App.css';
import './dark.css'
import { Route, Routes } from 'react-router-dom';
import Editpage from './page/Editpage';
import Login from './page/Login';
import Foodpage from './page/Foodpage';
import Home from './page/Home';
import { useAppSelector } from './store';
import Qrcode from './page/Qrcode';

function App() {
  const dark = useAppSelector(state => state.darkMode)

  return (
    <div className={dark ? 'app dark' : 'app'}> 
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="qrcode" element={<Qrcode />} />
          <Route path="foods">
            <Route index element={<Foodpage />} />
            <Route path=":foodid" element={<Editpage />} />
            <Route path="new" element={<Editpage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
