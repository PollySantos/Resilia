var email = prompt('Qual é o seu email?')

function validaEmail() {
    if(email.indexOf('@') >= 0) {
        return true
    } else {
        return false
    }
}

function exibirResultadoValidacao(validador) {
    if (validador == true) {
        document.white('Email validado') 
    } else {
        document.white('Email fornecido INVÁLIDO')
    }
}

exibirResuldadoValidacao(validaEmail)