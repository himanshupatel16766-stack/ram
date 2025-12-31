import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlipPortfolio from './component/filpportfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <FlipPortfolio/>
    </>
  )
}

export default App
