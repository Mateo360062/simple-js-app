let pokemonList = [
  {name: 'Gastly', height: 3, type: ['ghost', 'poison']},
  {name: 'Milotic', height: 9, type: ['dragon', 'water']},
  {name: 'Steelix', height: 8, type: ['steel', 'rock']}
]
pokemonList.forEach(function(pokemon){
  if(pokemon.height <= 8){
    document.write(`${pokemon.name}(height: ${pokemon.height})<br>`)
  }else if(pokemon.height > 8){
  document.write(`${pokemon.name}(height: ${pokemon.height}) - That's big!<br>`)
  }
  
})


function divide(dividend,divisor){
  if(divisor === 0){
    return document.write('You\'d tried to divide by 0!')
  }
  else{
    return dividend / divisor
  } 
}
divide(2,1);
console.log(divide(4,2));
let pokemonRepository = (function(){
  let pokemonList = ['Pikachu'];
  return {
    add: function(pokemon){
      pokemonList.push(pokemon)
    },
    getAll: function(){
      return pokemonList
    }
  }
})();
document.write(pokemonRepository.getAll());
pokemonRepository.add('Charizard');
document.write(pokemonRepository.getAll());
document.write(pokemonList);