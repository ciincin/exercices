interface Country{
    name:string;
    population:number;
}

const country:Country ={
    name: "Narnia",
    population:123,
}
console.log(`The population of ${country.name} is ${country.population} `);
