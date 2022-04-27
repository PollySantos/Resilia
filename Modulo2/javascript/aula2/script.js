var inter = document.querySelector('#principal');

inter.addEventListener('click', function(){
    var estado = inter.style.flexDirection
    if(estado == 'column') {
        inter.style.flexDirection = 'row'
    } else {
        inter.style.flexDirection = 'column'
    }
})

var qUm = document.querySelector('#area1')
var qDois = document.querySelector('#area2')
var qTres = document.querySelector('#area3')

qUm.addEventListener('click', function(){
    if(qUm.style.background == 'Purple') {
        qUm.style.background = 'blue'
    } else {
        qUm.style.background = 'Purple'
    }
})
qDois.addEventListener('click', function(){
    if(qDois.style.background == 'red') {
        qDois.style.background = 'green'
    } else {
        qDois.style.background = 'red'
    }
})
qTres.addEventListener('click', function(){
    if(qTres.style.background == 'pink') {
        qTres.style.background = 'yellow'
    } else {
        qTres.style.background = 'pink'
    }
})
