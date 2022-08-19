// Faça um algoritmo que calcule o fatorial de um número.

// pega no numero e faz ele . ele -1, até chegar em 1. 0! e 1! não conta, pois são igual a 1

function algoritmo(x) {
    if(x == 0) {
        return 1
    } else {
        return x * algoritmo(x-1)
    }
}

console.log(algoritmo(10))