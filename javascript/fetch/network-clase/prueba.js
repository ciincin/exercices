async function recoverToDos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/toos");
  const toDos = await data.json();

  // let idToDo;
  // toDos.forEach((toDo) => {
  //   if (toDo.id == 6) {
  //     idToDo = toDo;
  //   }
  // });
  // console.log(idToDo);

  // const listID = toDos.filter((toDo) => {
  //   return toDo.id == 6;
  // });

  // console.log(listID);

  const listFalse = toDos.filter((toDo) => {
    return toDo.completed == false;
  });

  return listFalse;
}

recoverToDos()
  .then((response) => console.log(response))
  .catch((err) => console.error("The process is not finished"));
