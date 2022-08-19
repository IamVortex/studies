function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    calcularJurosSimples = capitalInicial - (capitalInicial * taxaDeJuros)
    return calcularJurosSimples
}

console.log(jurosSimples(2000, 0.2))

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    calcularJurosComposto = (capitalInicial - (capitalInicial * taxaDeJuros)) * tempoDeAplicacao
    return calcularJurosComposto
}

console.log(jurosComposto(2000, 0.2, 10))

// realmente não entendi como faz o juros composto