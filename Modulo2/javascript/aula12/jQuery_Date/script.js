function operacoesArit(nOp) {
    const numbers = Array(nOp);
    const results = numbers.map( (el) => { Math.floor(Math.random() * 10000000) } );
  }

  function calcTemp(){
      let iniciando = moment()
      let value = parseInt($("#name").val())
      operacoesArit(value)
      let theend = moment()
      return $(".result").html(`O pc levou ${theend.diff(iniciando)} milisgundos para executar a operação`)
  }

  $('#submit').click(function(evento){
      evento.preventDefault()
      calcTemp()
  })

  
  
  //Utilize jQuery, Date e a função operacoesArit para exibir na div de classe result a quantidade de milisegundos para realizar um certo número de operações
  