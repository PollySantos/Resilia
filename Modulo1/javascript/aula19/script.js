var gaveta = [
    ['lapis', 'caneta', 'borracha'],
    ['anel', 'brinco']
];

function achaItem(gavetaProcurada,itemProcurado) {
    for (var i = 0; i < gavetaProcurada.length; i++) {
        if (gavetaProcurada[i].indexOf(itemProcurado) >= 0) {
            return `O item ${itemProcurado} está no pote ${i}`
        }
    }
    return 'Não achei';
}