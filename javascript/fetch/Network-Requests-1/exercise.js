async function recoverToDos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const toDos = await data.json();
  console.log(toDos);
}

recoverToDos();
