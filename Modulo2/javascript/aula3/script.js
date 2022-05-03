var cachorro = {
    nome: [],
    data: [],

    adicionarNome: function() {
        cachorro.nome.push(prompt('Adicionar nome'));
    },
    adicionarData: function() {
        cachorro.data.push(prompt('Colocar data'));
    },
    latir: function(){
        alert('UFF');
    },
    comer: function() {
        alert('O cachorro comeu')
    },
    
}