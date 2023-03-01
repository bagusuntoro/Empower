import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState, useRef, useContext } from 'react'
import './App.css'
import { AuthContext } from './context/AuthContext'

// pages
import { Home } from './Pages/Home'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'

import { Layout } from './components/Layout'


function App() {
  return (


    <Layout>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />


        </Routes>
      </Router>
    </Layout>
  )
}

export default App
