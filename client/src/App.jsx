import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import ResumeBuilder from './components/ResumeBuilder.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/resumeform' element={<ResumeBuilder/>}/>
      </Routes>
    </>
  )
}

export default App