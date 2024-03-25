function sumUntil(maxValue) {
  let result = 0;

  for (let i = 0; i <= maxValue; i++) {
    result = result + i;
  }
  return result
}

console.log(sumUntil(5));
