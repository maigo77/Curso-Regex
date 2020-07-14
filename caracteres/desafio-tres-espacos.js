const texto = 'a   b'
// Construir o máximo de expressões regulares que retornem os 3 espaços
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a...b/))

// No futuro..
console.log(texto.match(/a\s+b/))
console.log(texto.match(/a {3}b/))
console.log(texto.match(/a\s{3}b/))