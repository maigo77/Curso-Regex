const texto = 'João é calmo, mas no trânsito fica nervoso.'
console.log(texto.match(/[\wÀ-\u00FC]+/gi))

// Positive lookahead (olha o que vem na frente para resolver o que vem antes)
console.log(texto.match(/[\wÀ-\u00FC]+(?=,)/gi)) // Todas palavras que são sucedidas por vírgula
console.log(texto.match(/[\wÀ-\u00FC]+(?=\.)/gi)) // Todas palavras que são sucedidas por ponto literal
console.log(texto.match(/[\wÀ-\u00FC]+(?=, mas)/gi)) // Todas palavras que são sucedidas por vírgula

// Negative lookahead
console.log(texto.match(/[\wÀ-\u00FC]+\b(?!,)/gi)) // Todas palavras que NÃO estejam na frente de vírgula 
console.log(texto.match(/[\wÀ-\u00FC]+[\s|\.](?!,)/gi))