const texto = 'Bom\nDia'
console.log(texto.match(/./g))
console.log(texto.match(/.../g))
console.log(texto.match(/..../g)) // o ponto não engloba o \n

// dotall - algumas linguagens possuem uma flag /exp/s, mas o JS não!