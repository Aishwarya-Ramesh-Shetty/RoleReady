import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import ResumeBuilder from './components/ResumeBuilder.jsx'
import ResumeList from './components/ResumeList.jsx'
import ResumeView from './components/ResumeView.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/resumeform' element={<ResumeBuilder/>}/>
        <Route path='/resumelist' element={<ResumeList/>}/>
        <Route path='/resumeview' element={<ResumeView/>}/>
      </Routes>
    </>
  )
}

export default App