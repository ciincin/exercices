import './App.css'
import { useContext } from 'react'
import Clock from './components/Clock'

function App() {
  
  const language = useContext()

  return (
    <>
      <Clock />
    </>
  )
}

export default App
