const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/gi))
console.log(texto.match(/a-c/g)) // Não define um range
console.log(texto.match(/[A-z]/g)) // Intervalos usam a ordem da tabela UNICODE

// Tem que respeita a ordem da tabela
// console.log(texto.match(/[a-Z]/g)) // Expressão Regular Inválida (Range out of order in character class)
// console.log(texto.match(/[4-1]/g)) // Expressão Regular Inválida (Range out of order in character class)