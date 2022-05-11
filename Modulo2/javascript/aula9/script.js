class Gato {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;

    }
    miau() {
        console.log(`${this.nome} está miando. Miauuuu!`);
    }
    comer() {
        console.log(`Deu fome! ${this.nome} está comendo.`);
    } 
    
}

const amelie = new Gato('Kaguro', 6, 'F');

const poliana = new Gato('Poliana', 29, 'F');

const pedro = new Gato('Pedro', 22, 'M')

    

   



