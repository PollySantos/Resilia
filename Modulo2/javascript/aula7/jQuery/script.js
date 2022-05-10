function chamaPokemon(pokemon) {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    success: function (result) {
      montaDiv(result);
    },
  });
}

var pesquisa = document.getElementById('submit');

pesquisa.addEventListener('click', function(e) {
  e.preventDefaut();
  var pokeName = document.getElementById('pk-name').value.toLowerCase();
  chamaPokemon(pokeName);
});

var divPoke = document.querySelector('.poke-info');

function montaDiv(pokemonInfo) {
  divPoke.innerHTML = `${pokemonInfo.name} + ${pokemonInfo.order}`;
}

