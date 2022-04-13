var email = prompt('Qual é o seu e-mail?')

function validaEmail() {
    if(email.indexOf('@') >= 0) {
        return true
    } else {
        return false
    }
}
