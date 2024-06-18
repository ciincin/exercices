
import './App.css'

import Hello from './components/HelloWorld'
import Message from './components/Message'
import Welcome from './components/Welcome'

import Time from './components/Time'
import Counter from './components/Counter'
import Clock from './components/Clock'


function App() {


  
  return (
    <>
      <Hello/>
      <Message/>
      <Welcome name="Cinthya" age= {9}/>
      <Time/>
      <Counter/>
      <Clock />
    </>
  )
}

export default App
