const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//Cuando se asigna un objeto a otra variable no se crea una copia
// si no una referencia, por lo que cuando modificas una propiedad
// en person2, como está apuntando a person1, también se modifica en person1
