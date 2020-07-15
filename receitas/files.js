const fs = require('fs')
const { dir } = require('console')

const read = nomeDoArquivo => {
  return fs.readFileSync(`${__dirname}/originais/${nomeDoArquivo}`, {encoding: 'utf8'})
}

const write = (nomeDoArquivo, conteudo) => {
  const dirname = `${__dirname}/alterados`
  if(!fs.existsSync(dirname)){
    fs.mkdirSync(dirname)
  }

  fs.writeFileSync(`${dirname}/${nomeDoArquivo}`, conteudo, { encoding: 'utf8' })
}

module.exports = { read, write }