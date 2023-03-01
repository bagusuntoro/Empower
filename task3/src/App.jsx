import { useEffect, useState, useRef, useContext } from 'react'
import './App.css'
import { AuthContext } from './context/AuthContext'
// components
import { Layout } from './components/Layout'
import { TopNavigation } from './components/header/TopNavigation'
import { Login } from './components/Login'

const Head = () => {
  const auth = useContext(AuthContext)
  console.log(auth)
  return (
    <h1>{auth.email ? 'Login' : 'Wait...'}</h1>
  )
}


function App() {
  return (
    <Layout>
      <TopNavigation />
      <div className="App">
        <Head />
        <div className="templateForm">
          <Login />
        </div>
      </div>
    </Layout>
  )
}

export default App
