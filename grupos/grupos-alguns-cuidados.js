const texto = 'Pedrinho (filho de Pedro Silva) é doutor do ABC!'
console.log(texto.match(/[(abc)]/gi)) // não é um grupo
console.log(texto.match(/([abc])/gi)) // é um grupo (com um conjunto dentro)
console.log(texto.match(/(abc)/gi)) // grupo desnecessário