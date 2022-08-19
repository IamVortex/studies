
// calcular Delta

const delta = function(a, b, c) {
    const calculaDelta = b**2 - 4 * a * c
    return calculaDelta
}

console.log(delta(1, 12, -13))

// Formula de bhaskara
// d = delta

const bhaskara = function(a, b, d) {
    const positivo =  (-b + Math.sqrt(d)) / 2 * a
    const negativo = (-b - Math.sqrt(d)) / 2 * a
    return console.log(positivo, negativo)
}

console.log(bhaskara(1, 12, 196))