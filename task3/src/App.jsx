import { useEffect, useState, useRef, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Layout} from './components/Layout'
import { AuthContext } from './context/AuthContext'
import { Login } from './components/Login'

const Pricing = () =>{
  const auth = useContext(AuthContext)
  console.log(auth)
  return(
    <h2>{auth.email ? 'Rp. 5000' : '-'}</h2>
  )
}


function App() {
  const [input, setInput] = useState('')
  const inputRef = useRef('')

  console.log('rendered ', input)
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('Send :', inputRef.current.value)
  }

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <Layout>
      <div className="App">
      <h1>Vite + React</h1>
      <Login/>
      
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={inputRef} />
        </div>
        <br />
        <button type='submit'>Send</button>

        {/* <button onClick={()=> inputRef.current.focus()}>Focus</button> */}
      </form>
      <Pricing/>
    </div>
    </Layout>
  )
}

export default App
