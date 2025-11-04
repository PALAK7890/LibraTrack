import React from 'react'
import Login from './login'
import './App.css'
import Signin from './signin';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
 <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
  )
}

export default App
