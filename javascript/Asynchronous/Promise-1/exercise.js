const number = 12;

const num = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("el numero es mayor que 10");
  } else {
    reject("el número no es mayor que 10");
  }
});

num.then((response) => console.log(response)).catch((err) => console.error(err));
