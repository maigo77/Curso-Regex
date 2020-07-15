const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // Problema do dotall (o ponto, dessa forma, não resolve o \n)
console.log(texto.match(/^r[\s\S]*r$/gi))