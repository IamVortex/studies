function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
} 

/*esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor)
    .then(esperarPor)*/

//function retornarValor() {
   // return new Promise(resolve => {
       // setTimeout(() => resolve(10), 5000)
  //  })
//}


async function executar() {
    
    await esperarPor(2000)
    console.log(`Async/Await 1...`)

    await esperarPor(2000)
    console.log(`Async/Await 2...`)

    await esperarPor(2000)
    console.log(`Async/Await 3...`)
}

executar()

// Deu tudo errado essa aula ai, se precisar ver dnv, vai na aula 195 tmj