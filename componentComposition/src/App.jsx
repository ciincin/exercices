import { useState } from 'react'
import './App.css'
import Container from './components/container/Container'

function App() {

  return (
    <>
      {/* <Container title={"This is the collapsable title"} /> */}
      <Container title="This is the collapsable title" >
      <div>This is children</div>
    
      </Container>
    </>
  )
}

export default App
