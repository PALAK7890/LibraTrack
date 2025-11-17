import React from 'react'
import Login from './login'
import './App.css'
import Signin from './signin';
import Home from './home'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
 <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path ="/home" element={<Home/>}/>    
          </Routes>
  )
}

export default App
