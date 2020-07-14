// Shorthands são atalhos que facilitam na hora de criar as expressões regulares, por exemplo, ao invés de fazer um conjunto de 0-9, pode-se usar o shorthand \d
// const texto = '1,2,3,4,5,6,7,8,9'
// console.log(texto.match(/\d/g))

const texto = `1,2,3,4,5,6,a.b c!d?e\t-\r\f
f_g`
console.log(texto.match(/\d/g)) // números [0-9]
console.log(texto.match(/\D/g)) // não números [^0-9]

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaço [ \t\n\r\f]
console.log(texto.match(/\S/g)) // não espaço [^ \t\n\r\f]

// Existem outros que serão abordados mais a frente no curso!
