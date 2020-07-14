// g - global
// i - ignore case

const texto = "Carlos assinou o abaixo assinado."

console.log('Sem flags: ', texto.match(/C|ab/))
console.log('Flag Ignore Case: ', texto.match(/c|ab/i))
console.log('Flag Global: ', texto.match(/c|ab/gi))

// ctrl+alt+n  para executar
// ctrl+alt+m  para parar\