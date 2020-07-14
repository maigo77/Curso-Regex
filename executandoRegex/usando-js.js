const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp - ')
console.log(regexNove.test(texto)) 
// True, ou seja, dentro da const texto possue o que a regexNove procura
console.log(regexNove.exec(texto))
// True, 18, encontra no índice, executa a expressão regular dentro da const texto

const regexLetras = /[a-f]/g // [a-f] significa todas as letras entre 'a' e 'f'
console.log('Métodos da String - ')
console.log(texto.match(regexLetras)) // Retorna um array de strings que se enquadram na regex
console.log(texto.search(regexLetras)) // Retorna o índice que bate com a primeira ocorrência da regex que você passou como parâmetro
console.log(texto.replace(regexLetras, 'achei')) // Substituir um elemento que você encontrou na regex por algum outro texto
console.log(texto.split(regexLetras)) // Separar um texto, gerar um array a partir de todos os matchs encontrados na regex