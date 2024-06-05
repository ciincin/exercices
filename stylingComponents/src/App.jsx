import './App.css'
import Welcome from './components/welcome/Welcome'
import Clock from "./components/clock/Clock"
import TodoList from "./components/todoList/TodoList"
import UncontrolledLogin from './components/uncontrolledLogin/UncontrolledLogin'

function App() {


  return (
    <>
      <Welcome name={"Cinthya"}/>
      <Clock />
      <TodoList />
      <UncontrolledLogin />
    </>
  )
}


export default App
