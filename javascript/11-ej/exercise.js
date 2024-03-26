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

function adultFilter(persons) {
  let adultList = [];

  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      adultList.push(persons[i]);
    }
  }
  return adultList;
}

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);

// function adultFilter2(persons) {
//   let adultList2 = persons.filter((person) => {
//    return person.age >= 18
//   })
//   return adultList2
// }

// console.log(adultFilter2(persons));