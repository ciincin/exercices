function printName() {
  let helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner();
}

//   console.log(printName());

setTimeout(() => {
  console.log(printName());
}, 1000);
