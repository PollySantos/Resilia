class Pilha {
    pilha = [];
    
    empilha(valor) {
        this.pilha.push(valor);
    }
    
    desempilha() {
        try {
            let valor = this.pilha[-1];
            if(valor == undefined ) {
                throw new Error ('pilha vazia');
            } else {
                console.log(`Ultimo valor da pilha foi ${valor}`);
            }  
        }
        catch (erro){
            console.log(erro);
        } 

        
    
    }
}