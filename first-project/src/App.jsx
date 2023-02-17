import { useEffect, useState } from 'react'
import React from 'react';
import { Button, DatePicker } from 'antd';
import './App.css'

const Timer = () => {
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)

  const handleStartStop = () => {
    setStart(start => !start)
  }

  const handleReset = () => {
    setCount(0)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (start) {
        setCount(count => count + 1)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [start])

  return [
    <div>
      <h1>Timer: {count}</h1>
      <div>
        <Button type="primary" onClick={handleStartStop}>{start ? 'Stop' : 'Start'}</Button>
        <Button type='primary' danger onClick={handleReset} disabled={start}>Reset</Button>
      </div>
    </div>
  ]
}

// const App: React.FC = () => (
//   <Space wrap>
//     <Button type="primary">Primary Button</Button>
//     <Button>Default Button</Button>
//     <Button type="dashed">Dashed Button</Button>
//     <Button type="text">Text Button</Button>
//     <Button type="link">Link Button</Button>
//   </Space>
// );

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <Timer />
      </div>
    </div>
  )
}

export default App
