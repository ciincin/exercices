function sum(...num) {
  return num.reduce((num1, num2) => num1 + num2);
}

const numbers = [1, 2, 3, 6];
console.log(sum(...numbers));