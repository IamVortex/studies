// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const salario = 2073.07
const plano = 'D'

switch(plano) {
    case 'A':
        let porcentagemA = salario * 0.10
        let salarioTotalA = salario + porcentagemA
        console.log(salarioTotalA)
        break

    case 'B':
        let porcentagemB = salario * 0.15
        let salarioTotalB = salario + porcentagemB
        console.log(salarioTotalB)
        break

    case 'C':
        let porcentagemC = salario * 0.20
        let salarioTotalC = salario + porcentagemC
        console.log(salarioTotalC)
        break

    default:
        console.log('Este plano é inválido')
}