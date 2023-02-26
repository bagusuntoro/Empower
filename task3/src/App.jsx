import { useEffect, useState, useRef, useContext } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import { AuthContext } from './context/AuthContext'
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
      <div className="App">
        <Head />
        <Login />
      </div>
    </Layout>
  )
}

export default App
