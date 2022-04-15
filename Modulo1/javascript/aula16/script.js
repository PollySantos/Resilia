function confereAlimento() {
    var nAlimento = prompt('Quantas comidas você quer colocar?')
    var alimentos = []
    var i = 0
    while (i != nAlimento) {
        var alimentos = prompt('Qual o alimento você quer adicionar')
        if(alimentos.length % 2 == 1) {
            alimentos.push(alimentos)
            i++
        } else {
            alert('Comida inválida, insira outra!')
        }
    }
    return alimentos
}

function mostrarTela(itens) {
    var i2 = 0
    while(i2 < itens.length) {
        document.write(`<li>${itens[i2]}</li>`)
        i2++
    }
}

mostrarTela(confereAlimento())