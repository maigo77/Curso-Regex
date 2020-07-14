const texto = `
Os e-mails dos convidados são: 
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - teste1.teste2@yahoo.com.br
  - a@a.c.b
`

// console.log(texto.match(/\w{3,40}@\w{3,20}\.[a-z]{2,10}\.?\w?/g)) - Expressão que eu fiz que deu quase certo (mas não deu!)
console.log(texto.match(/[\w{3,}.]+@\w{3,}\.\w{2,10}\.?\w{0,2}/g))

// No futuro..
console.log(texto.match(/[\w{3,}.]+@\w{3,}\.\w{2,10}(\.\w{2})?/g))