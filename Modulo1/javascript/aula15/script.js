var n = prompt('Digite o numero positivo')
var string = '';

function listaDecrescente() {
    while (num >= 0) {
        string += `${num} <br>`;
        num--;
    }
    document.white(`${string} <br>`)
}

listaDecrescente();

var n2 = prompt('Digite outro número')

function fizz() {
    var inicio = 0;
    var string2 = '';
    while (inicio < n2) {
        inicio++;
        if (inicio % 3 ==0) {
        string2 += `fizz <br>`;
    } else {
        string2 += `${inicio} <br>`
    }
}

document.white(string2)
}
fizz()

