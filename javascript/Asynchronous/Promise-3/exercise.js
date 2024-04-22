const islogged = true;

const userIsLogged = new Promise((resolve, reject) => {
  let num = Math.random();
  if (islogged) {
    resolve(num);
  } else {
    reject(new Error(`User is not logged!`));
  }
});

const userInfo = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error(`${number} is smaller or equal to 0.5`));
    }
  });
};

userIsLogged
  .then(userInfo)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(()=>console.log("This will be always printed!"));
