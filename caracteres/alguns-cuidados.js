const textoUmaLinha = '...' //aspas simples ou duplas

const textoMultiLinha = ` Template Strings!
  linha 1
  linha 2
`

// cuidado com o tab!
console.log('   '.match(/\s/g)) // encontra 3 espaços
// caso o padrão do tab seja de 4 espaços ele retorna '/t'

console.log(textoUmaLinha) // caso execute o arquivo com algo selecionado, o compilador apenar executará a linha selecionada! (No caso ele retorna 'textoUmaLinha is not defined')
