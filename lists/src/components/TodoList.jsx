import { useState } from "react";

// { id: "3", task: "programming" },
//       { id: "4", task: "sleep" },

function TodoList() {
  const [todoState, setTodoState] = useState([
    { id: "1", task: "running" },
    { id: "2", task: "meditate" },
  ]);

  const [newTodo, setNewTodo] = useState({})

//   const newTodo = {id:"5", task:"nap"}

  function handleNewTodo(event){
    setNewTodo({id:"x", task:event.target.value})

    console.log(newTodo);
  }

  function handleAddItems() {
    setTodoState((currentItems) => [
      ...currentItems, newTodo       
    ]);
  }

  function removeItem(i){
    const todosListExceptClicked = todoState.filter((item, arrayIndex)=>arrayIndex!==i)
    setTodoState(todosListExceptClicked)
  }
  return (
    <>
      <ul>
        {todoState.map((todo, index) => {
          return (
          <div key={index}>
          <li>{todo.task}</li>
          <button onClick={()=>removeItem(index)}>Remove</button>
          </div>
          );
        })}
      </ul>
      <input type="text" value={newTodo.task} onChange={handleNewTodo}/>
      <button onClick={handleAddItems}>Change to Dos</button>
    </>
  );
}

export default TodoList;
