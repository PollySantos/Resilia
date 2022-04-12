function dirigirEBeber (idade) {
    if (idade > 18) {
        return  'Você pode dirigir e beber!'
    } else {
        return 'Você não pode dirigir nem beber: '
    }
}

function previsaoRodagem (litros, quilometragem) {
    return 'O carro pode rodar' + quilometragem*litros + 'km.';
}

//ou 

function previsaoRodagem (litros) {
    var kmPorLitros = 6
    var podeRodar = litros * kmLitros
    return 'Você ainda pode rodar mais' + podeRodar + 'km.'

    console.log(previsaoRodagem (20))
    
}