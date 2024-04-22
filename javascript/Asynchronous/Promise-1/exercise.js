const number = 15;

const num = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(`${number} is greater than 10`);
  } else {
    reject(`${number} is smaller or equal than 10`);
  }
});

num.then((val) => console.log(val)).catch((err) => console.error(err));
