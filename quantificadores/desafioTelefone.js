const texto = `
Lista Telefônica: 
  - (11) 98765-1212
  -98765-4321
  -3901-4321
  - (85) 4002-8922
`

console.log(texto.match(/\(?\d{0,2}?\)?\s?\d{4,5}-\d{4}/g))