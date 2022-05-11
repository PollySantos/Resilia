class Pilha {
    pilha = [];
    
    empilha(valor) {
        this.pilha.push(valor);
    }
    
    desempilha() {
        try {
            if(this.pilha.length == 0 ) {
                throw new Error ('pilha vazia');
            } else {
                console.log(`Ultimo valor da pilha foi ${this.pilha.pop()}`);
            }  
        }
        catch (erro){
            console.log(erro);
        } 

    }

    exibePilha() {
        return this.pilha;
    };
}

// Executado no code run ou navegador
let pilha = new Pilha();
pilha.empilha(1);
pilha.empilha(2);
pilha.empilha(3);
pilha.empilha(4);
console.log(pilha.exibePilha());

// testando a retirada do obejto da pilha
pilha.desempilha(1);
pilha.desempilha(2);
pilha.desempilha(3);
pilha.desempilha(4);
console.log(pilha.exibePilha());