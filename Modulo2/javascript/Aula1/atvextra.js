var prgfo = document.createElement('p');

function abre() {
    prgfo.innerHTML = ("<h2>Estamos abertos!</h2>")
    document.querySelector('#res'). append(prgfo)
}

function fecha() {
    prgfo.innerHTML = ("<h2>Estamos fechados!</h2>")
}