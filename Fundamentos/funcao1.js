// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o segundo é undefined
imprimirSoma(2, 7, 4, 5, 6, 7, 8) // ele ignora depois dos dois primeiros
imprimirSoma() // NaN = Not A Number

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))