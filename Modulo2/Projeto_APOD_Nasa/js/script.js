let text = document.getElementById('texto')
let title = document.getElementById('titulo')
let img = document.getElementById('imagem')
let botao = document.getElementById('bnt')

botao.addEventListener('click', function(){
    apiKey = 'BfhPwLYLfzhkf2tBwWpsd4PdGSX9bVUBF4Dw26LW'
    data = document.getElementById('selectDate').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${data}`
  
    $.ajax({
        url: url,
        success: function(result){
            titulo.innerHTML = `${result.title}`
            texto.innerHTML = `${result.explanation}`
            img.innerHTML = `<img style= "width: 500px" src="${result.url}"/>`
          }
      })
  });