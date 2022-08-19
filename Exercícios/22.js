// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

// 5/100

function calcularJuros(anuidade) {
        let juros = 5 * anuidade/100   
        let janeiro = anuidade + juros
        let fevereiro = janeiro + juros 
        let marco = fevereiro + juros
        let abril = marco + juros
        let maio = abril + juros
        let junho = maio + juros
        let julho = junho + juros
        let agosto = julho + juros
        let setembro = agosto + juros
        let outubro = setembro + juros
        let novembro = outubro + juros
        let dezembro = novembro + juros
        let valorTotal = dezembro
        return valorTotal
}

console.log(calcularJuros(230))