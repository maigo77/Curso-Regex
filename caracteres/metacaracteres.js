// . ? * + - ^  $ | [  ] {  } (  ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./g // Escape
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))