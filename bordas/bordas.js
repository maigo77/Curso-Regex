const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'
console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // início da linha/string
console.log(texto.match(/r$/gi)) // fim da linha/string

console.log(texto.match(/^r.*r$/gi)) // Problema do dotall (o ponto, dessa forma, não resolve o \n)