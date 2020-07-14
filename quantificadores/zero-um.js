const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'
const texto2 = 'There is a big fog on NYC'

// ? -> zero ou um (opcional)
const regexInterrogacao = /fogo?/gi // No caso, o último 'o' da palavra 'fogo' se torna opcional
console.log(texto1.match(regexInterrogacao))
console.log(texto2.match(regexInterrogacao))