function fabrica(nome, peso, raca) {
    return {
        nome: nome,
        peso: peso,
        raca: raca,
        latir: function() {
            console.log(`${this.nome}: auau`);
        },
        rosnar: function() {
            console.log(`${this.nome}: grrr`);
        },
    };
}        