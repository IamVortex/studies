// let e const
// var tem o escopo global, não use!
{
    let a = 2
    let b = 3
    console.log(a)
    console.log(b)
}

// Template String
const produto = 'IPad'
console.log(`${produto} é caro!`)

// Destructuring
const [a, b, ...cdef] = "Cod3r"
console.log(a, b, cdef)

const [x, y] = [1, 2]
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(nome, idade)