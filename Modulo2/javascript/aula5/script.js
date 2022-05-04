var carro = {
    cor: 'Rosa',
    capacidadeTanque: 55,
    qtdCombustivel: 10,
    consumoMedio: 5,

    prevRodagem: function() {
        var previsao = this.qntCombustivel = this.consumoMedio;
        return previsao;
    },

    rodas: function(dist) {
        var consumo = dist / this.consumoMedio;
        this.qntCombustivel -= consumo;
    },

    getCor: function() {
        return this.cor;
    },

    getCapacidadeTanque: function() {
        return this.capacidadeTanque;
    },

    getQntCombustivel: function() {
        return this.qntCombustivel;
    },

    getConsumoMedio: function() {
        return this.consumoMedio;
    },

    setCapacidadeTanque: function(novaCapacidade) {
        if (typeof novaCapacidade == 'number') {
            this.capacidadeTanque = novaCapacidade;
        }
    },

    setQntCombustivel: function(qntAbastecimento) {
        var total = this.qntCombustivel + qntAbastecimento;
        if(total <= this.capacidadeTanque) {
            this.qntCombustivel = total;
        }
    },

    setConsumoMedio: function(novoConsumoMedio) {
        if(typeof novoConsumoMedio == 'number') {
            this.consumoMedio = novoConsumoMedio;
        }
    },
   
};

