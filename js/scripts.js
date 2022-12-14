let pokemonRepository = (function(){
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
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
        button.addEventListener('click', showDetails)
        button.classList.add('selected');
        listItem.appendChild(button);
        unorderedList.appendChild(listItem);
      }
      function loadList(){
        return fetch(apiUrl).then(function(response){
          return response.json();
        }).then(function(json){
          json.results.forEach(function(item){
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
             add(pokemon);
          }).catch(function (e){
            console.error(e)
          })
        })
      }
      function loadDetails(){
        let url = detailsUrl
        return fetch(url).then(function(response){
          return response.json();
        }).then(function(details){
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function(e){
          console.error(e);
        })
      }
      function showDetails(pokemon){
        loadDetails(pokemon).then(function(){
          console.log(pokemon);
        })
      }
      return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
      }
    }
    )();
    pokemonRepository.loadList().then(function(){
      pokemonRepository.getAll.forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
      })
    })
    

    

    
    
    
    
    
    