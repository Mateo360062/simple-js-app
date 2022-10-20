let pokemonRepository = (function(){
  let pokemonList = [
    {name: 'Gastly', height: 3, type: ['ghost', 'poison']},
    {name: 'Milotic', height: 9, type: ['dragon', 'water']},
    {name: 'Steelix', height: 8, type: ['steel', 'rock']}
  ]
  function getAll(){
    return pokemonList
  }
  function add(pokemon){
    if(typeof pokemon === Object && 
      Object.keys(pokemon) === Object.keys(pokemonRepository.getAll()[0])){
        pokemonList.push(pokemon)}
      }
      function addListItem(pokemon){
        let unorderedList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.addEventListener('click', showDetails);
        button.classList.add('selected');
        listItem.appendChild(button);
        unorderedList.appendChild(listItem);
      }
      function showDetails(pokemon){
       console.log(pokemon)
      }
      return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
      }
    }
    )();
    
    pokemonRepository.addListItem({name:'Gengar',height:4, type: 'water'})
    document.write(JSON.stringify(pokemonRepository.getAll()))
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    })

    
    
    
    
    
    