async function recoverToDos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(data)
  const toDos = await data.json();
  console.log(typeof toDos);
}

recoverToDos();
