let ingredientes = '2uCenoura ' + '2xAçucar ' + '1xÓleo ' + '4Ovos ' + '2xFarinha ' + '1cFermento.'
let ICobertura = '200gChocolate ' + '200mlCremeDeLeite.'

function preparandoMassa(ingredientes) {
    if (ingredientes >= 1) {
        console.log('Massa pronta')
    } else if (ingredientes < 1) {
        console.log('Falta ingredientes')
    }
}

preparandoMassa(1)

function preparandoCobertura(ICobertura) {
    if (ICobertura >= 1) {
        console.log('Cobertura pronta')
    } else if (ICobertura < 1) {
        console.log('Falta ingredientes')
    }
}

preparandoCobertura(1)

let coberturaPronta = 1
let massaPronta = 1

function cobertura(coberturaPronta) {
    if (coberturaPronta >= 1) {
        console.log('Faça o bolo!')
    } else if (coberturaPronta < 1) {
        console.log('Faça a cobertura!')
    }
}

cobertura(1)

function massa(massaPronta) {
    if (massaPronta >= 1) {
        console.log('Coloque-o no forno')
    } else if (massaPronta < 1) {
        console.log('Faça a massa!')
    }
}

massa(1)

const boloForno = {
    tempo: '15 minutos',
    situacao: 'Assando'
}

console.log(boloForno)
console.log('15 minutos depois!')
console.log('Bolo Pronto')
