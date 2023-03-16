import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// import pages
import CreateBelanja from './pages/CreateBelanja'
import DaftarBelanja from './pages/DaftarBelanja'
import DetailBelanja from './pages/DetailBelanja'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<DaftarBelanja/>}></Route>
          <Route path='/detail' element={<DetailBelanja/>}></Route>
          <Route path='/belanja' element={<CreateBelanja/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
