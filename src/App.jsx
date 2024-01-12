import { useState } from 'react'
import './styles/App.css'
//import logo1000 from '../public/img/logo/logo1000.png'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home className="Home" />
      <div className="more-space"></div>
    </>
  )
}

export default App
