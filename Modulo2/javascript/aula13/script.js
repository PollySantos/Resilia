class Fila {
    fila = [];
    
    chegada(valor) {
        this.fila.push(valor);
    }
    
    partida() {
        try {
            if(this.fila.length == 0 ) {
                throw new Error ('Fila vazia');
            } else {
                console.log(`Ultimo valor da fila foi ${this.fila.pop()}`);
            }  
        }
        catch (erro){
            console.log(erro);
        } 

    }

    exibeFila() {
        return this.fila;
    };
}

// Executado no code run ou navegador
let fila = new Fila();
fila.chegada(1);
fila.chegada(2);
fila.chegada(3);
fila.chegada(4);


console.log(fila.exibeFila());

// testando a retirada do objeto da pilha
fila.partida(1);
fila.partida(2);
fila.partida(3);
fila.partida(4);

console.log(fila.exibeFila());