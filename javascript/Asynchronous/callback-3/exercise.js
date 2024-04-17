function repeatHello(cb) {
  const intervalID = setInterval(cb, 1000);

  setTimeout(() => clearInterval(intervalID), 5000);
}

repeatHello(() => console.log("Hello"));
