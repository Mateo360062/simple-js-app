let pokemonList = [
  {name: 'Gastly', height: 3, type: ['ghost', 'poison']},
  {name: 'Milotic', height: 9, type: ['dragon', 'water']},
  {name: 'Steelix', height: 8, type: ['steel', 'rock']}
]
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height <= 8) {
    document.write(`<br>${pokemonList[i].name}(height:${pokemonList[i].height})</br>`)
  }
  else if (pokemonList[i].height > 8) {
    document.write(`<br>${pokemonList[i].name}(height:${pokemonList[i].height}) - Wow, that's big!<br>`)
  }
}
