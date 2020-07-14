const texto = '1,2,3,a.b c!d?e[f'
console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'
console.log(texto2.match(/[^!-/:-@\s]/g)) // Aqui, há dois intervalos, do ! até o / e outro que vai dos : até o @, além de remover os espaços em branco
