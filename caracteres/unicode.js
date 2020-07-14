// no início... 
// Um byte (8 bits) - 256 caracteres
// Isso mapeia, poucos símbolos, algumas pontuações, A-Z, a-z, 0-9 (Bastante Limitado)

// Dois bytes (16 bits) -  65500+ caracteres
// Mapeia + Símbolos, + Pontuações, A-Z, a-z, 0-9 (Ainda Limitado)

// Unicode
// Quantidade de bytes é variável - Expansível
// Suporta mais de 1 Milhão de caracteres
// Atualmente possue mais de 100 mil caracteres atribuidos dentro da tabela unicode
// A tabela - https://unicode-table.com/pt/

const texto = 'aʬc௵d' // 02AC 0BF5
console.log(texto.match(/\u02AC|\u0BF5/g))