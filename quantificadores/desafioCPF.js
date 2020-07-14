const texto = `
CPF dos Aprovados: 
  - 600.567.980-12
  - 765.998.345-23
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))