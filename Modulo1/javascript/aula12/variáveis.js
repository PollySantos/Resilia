var Ali1 = 'tomate'
var Ali2 = 'laranja'
var Ali3 = 'abacaxi'
var Ali4 = 'limão'

var ValorSemanaAnterior = 10
var ValorSemanaAtual = 15

if (ValorSemanaAtual > ValorSemanaAnterior) {
    console.log( 'O alimento aumentou: ' + (ValorSemanaAtual - ValorSemanaAnterior) + ' reais')
} else if (ValorSemanaAtual < ValorSemanaAnterior) {
    console.log( 'O alimento diminuiu: ' + (ValorSemanaAnterior - ValorSemanaAtual) + ' reais') 
} else if (ValorSemanaAtual == ValorSemanaAnterior) {
    console.log( 'Não houve alteração no preço do ' + Ali1)
} else {
    console.log('Não existe esse alimento')
}
