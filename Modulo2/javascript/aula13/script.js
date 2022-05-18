class Fila {
    fila = ['Ana', 'Natalia', 'Amanda', 'Leandro', 'Polina'];
    
    chegada(valor) {
        this.fila.push(valor);
    }
    
    partida() {
        try {
            if(this.fila.length == 0 ) {
                throw new Error ('Fila vazia');
            } else {
                console.log(`Esse vazou ${this.fila.pop()}`);
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

console.log(fila.exibeFila());

// testando a retirada do objeto da pilhaa
fila.partida('Ana');
fila.partida('Thais');


console.log(fila.exibeFila());
