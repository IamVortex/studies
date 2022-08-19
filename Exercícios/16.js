// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores

var x = 9
var y = 6

const numeros = 'mult'

switch(numeros) {
    case 'soma':
        console.log(x + y)
        break
    
    case 'sub':
        console.log(x - y)
        break

    case 'div':
        console.log(x / y)
        break

    case 'mult':
        console.log(x * y)
        break

    default: 
        console.log('Insira um valor!')
}