function triangulo(a, b, c) {
    if (a == b && b == c) {
        return 'Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(2, 2, 2))
console.log(triangulo(2, 3, 3))
console.log(triangulo(2, 3, 4))

function triangulo2(a, b, c) {
    if (a === b === c) {
        return 'Esquilátero'
    } else if(a === b !== c) {
        return 'Isóceles'
    } else if (a !== b  || a !== c || b !== c) {
        return 'Escaleno'
    }
}

console.log(triangulo2(1, 2, 3))