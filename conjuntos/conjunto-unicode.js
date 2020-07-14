const texto = 'áéióú àèìòù âêîôû ç ãõ ü'
console.log(texto.match(/[À-\u00FC]/g))
console.log(texto.match(/[\u00C0-\u00FC]/g))