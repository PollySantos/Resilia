var pesquisa = document.getElementById('submit');

pesquisa.addEventListener('click', function (e) {
  e.preventDefaut();
})

pesquisa.addEventListener('click', function() {
  var pokeName = document.getElementById('pk-name').value;
  $.ajax({
    url:`https://pokeapi.co/api/v2/pokemon/${pokeName}`,
    success: function(results) {
        console.log(results)
    }
  })
})