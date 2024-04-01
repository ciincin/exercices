const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

// function getAges() {
//   let personAges = [];
//   for (let i = 0; i < persons.length; i++) {
//     personAges.push(persons[i].age);
//   }
//   return personAges;
// }

// function addAges(agesArray) {
//   let totalAges = 0;
//   for (let i = 0; i < persons.length; i++) {
//     totalAges = totalAges + agesArray[i];
//   }
//   return totalAges;
// }

// let addedAges = addAges(getAges());

// function ageAverage(listOfAges, numberOfAges) {
//   return listOfAges / numberOfAges;
// }

// console.log(ageAverage(addedAges, persons.length));

function calculateAverageAge(persons) {
  const sumOfAges = persons.reduce((sum, person) => sum + person.age, 0);

  let numberOfPeople = persons.length;

  let total = sumOfAges / numberOfPeople;

  return Math.round(total);
}

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
