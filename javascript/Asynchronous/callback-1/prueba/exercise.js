function prueba() {
  console.log("Hola");
  setTimeout(() => console.log("Cinthya"), 1000);
}

setTimeout(prueba, 1000);
 // en este caso no tenemos que ponerle los paréntesis a prueba, ya que no tengho parámetros en mi función)