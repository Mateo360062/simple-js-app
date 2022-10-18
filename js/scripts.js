let pokemonRepository = (function(){
   let pokemonList = [
    {name: 'Gastly', height: 3, type: ['ghost', 'poison']},
    {name: 'Milotic', height: 9, type: ['dragon', 'water']},
    {name: 'Steelix', height: 8, type: ['steel', 'rock']}
  ]
  return {
    getAll: function(){
      return pokemonList
    },
    add: function(pokemon){
      if(typeof pokemon === Object && 
        Object.keys(pokemon) === Object.keys(pokemonRepository.getAll()[0])){
          pokemonList.push(pokemon)}
      }
    }
  }
)()

pokemonRepository.add({name:'Gengar',height:4, type: 'water'})
document.write(JSON.stringify(pokemonRepository.getAll()))
pokemonRepository.getAll().forEach(function(pokemon){
  if(pokemon.height <= 8){
    document.write(`<br>${pokemon.name}(height: ${pokemon.height})<br>`)
  }else if(pokemon.height > 8){
  document.write(`<br>${pokemon.name}(height: ${pokemon.height}) - That's big!<br>`)
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
