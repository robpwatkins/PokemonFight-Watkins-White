console.log('app.js here...');
let playerOne = null;
let playerTwo = null;
const fetchPlayerOne = fetch('https://pokeapi.co/api/v2/pokemon/charmeleon')
  .then(res => res.json())
  .then(json => {playerOne = json});

const fetchPlayerTwo = fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff')
.then(res => res.json())
.then(json => {playerTwo = json})

const displayPlayerOne = () => {
  let name = playerOne.name;
  let backSpriteUrl = playerOne.sprites.back_default;
}