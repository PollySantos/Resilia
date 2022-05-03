var lista = {
    tipo: 'Listade compras',
    itens: ['mamão', 'cenoura', 'laranja', 'abacaxi', 'uva', 'banana'],
    adicionaItens: function() {
        lista.itens.push(prompt('Qual item você quer adicionar'));
    },
    exibirItens: function() {
        console.log(lista.itens);
    },
    removeItensNome: function() {
        lista.itens.splice(lista.itens.indexOf(prompt('Digite o nome do item que você deseja remover')), 1)
    },
    removeItemPosicao: function() {
        lista.itens.splice(prompt('Digite a posição do item que você deseja remover da lista o primeiro item é 0:'), 1)

    }
}

lista.exibeItens();

lista.removeItemNome();

lista.removeItemPosicao();

lista.exibeItens();