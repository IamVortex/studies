function nomePessoa() {
    this.nome = nome => console.log(`Meu nome é ${nome}`)
}

const p2 = new nomePessoa('Pedro')
console.log(p2)
p2.nome()