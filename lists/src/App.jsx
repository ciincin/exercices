import "./App.css";
import Colors from "./components/Colors";
import TodoList from "./components/TodoList";

const colorsArray = [
  { name: "violet", id: "1" },
  { name: "white", id: "2" },
  { name: "black", id: "3" },
];

const todoList = [
  { id: "1", task: "shopping" },
  { id: "2", task: "meditate" },
];


function App() {
  return (
    <>
    <h1>Colors</h1>
      <Colors colors={colorsArray} />
    <h1>Todos</h1>
    <TodoList todos={todoList} />
    </>
  );
}

export default App;
