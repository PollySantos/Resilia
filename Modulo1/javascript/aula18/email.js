function validaEmail() {
    var msg = prompt('Digite seu e-mail:')
    while(true) {
        if(msg.indexOf('@')>= 1) {
            alert(`Valor ${msg} para e-mail validado com sucesso!`);
            break;
        } else {
            alert(`Valor fornecido para e-mail é inválido! Insira novamente.`)
            var msg = prompt('Digite seu e-mail:')
        }
    }
}