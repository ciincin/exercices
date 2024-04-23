async function toDoList() {
  const dataToGet = await fetch("https://jsonplaceholder.typicode.com/todos");
  const toDos = await dataToGet.json();
  return toDos;
}

toDoList()
 .then((val) => console.log(val))
 .catch((err) => console.error("fetch was failed", err))
