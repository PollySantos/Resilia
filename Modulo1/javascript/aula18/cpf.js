function validaCPF() {
    var msg = prompt('Digite seu CPF:')
    while(true) {
        if(msg.length == 11) {
            alert(`Valor ${msg} para CPF validado com sucesso!`);
            break;
        } else {
            alert(`Valor fornecido para CPF é inválido! Insira novamente.`)
            var msg = prompt('Digite seu CPF:')
        }
    }
}