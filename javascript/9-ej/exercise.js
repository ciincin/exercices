const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

for (const key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}

// console.log(Object.keys(person));
