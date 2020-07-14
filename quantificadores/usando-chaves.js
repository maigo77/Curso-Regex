const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// Para definir um quantificador usa-se {}
console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/\d{2}/g))
console.log(texto.match(/\d{1,}/g))

console.log(texto.match(/\w{7}/g)) // Não pegou a palavra 'milhões' por causa do 'õ'
console.log(texto.match(/[\wõ]{7}/g)) // Pega 7 caracteres incluindo os espaços
console.log(texto.match(/[\wõ]{7,}/g))

// No futuro..
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))
console.log(texto.match(/\b[\wõ]{7,}\b/g))