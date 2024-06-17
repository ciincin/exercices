async function fetchApi (){
const data = await fetch("https://www.freetogame.com/api/games")
const games = await data.json()
console.log(games);
}

fetchApi()