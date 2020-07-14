const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
// Quantas referência de '.mp3' existem na const texto?
console.log(texto.match(/\.mp3/g))

// No futuro..
console.log(texto.match(/\w+\.mp3/g))