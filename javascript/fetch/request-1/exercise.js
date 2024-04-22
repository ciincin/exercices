async function toDoList() {
  const dataToGet = await fetch("https://jsonplaceholder.typicode.com/todos");
  const toDos = await dataToGet.json();
  console.log(toDos);
}

toDoList();
