const fs = require("fs")

function getAllLivros() {
    return JSON.parse(fs.readFileSync("dados.json"))
}

function getLivroId(id) {
    const livro = JSON.parse(fs.readFileSync("dados.json"))
    const livroFiltrado = livro.filter(livro => livro.id === id ) [0]
    return livroFiltrado
}    

function insereLivro(novoLivro) {
    const livrosAtual = JSON.parse(fs.readFileSync("dados.json"))
    const livroNovo = [...livrosAtual, novoLivro]
    fs.writeFileSync("dados.json", JSON.stringify(livroNovo))
}

function modificaLivros(modificacao, id) {
    let livrosAtuais= JSON.parse(fs.readFileSync("dados.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const livroModificado = {...livrosAtuais[indiceModificado], ...modificacao}

    livrosAtuais[indiceModificado] = livroModificado

    fs.writeFileSync("dados.json", JSON.stringify(livrosAtuais))
}

function deletarLivroId(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("dados.json"))

    const livrosFiltrados = livrosAtuais.filter(livro => livro.id!== id )
    fs.writeFileSync("dados.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getAllLivros, getLivroId, insereLivro, modificaLivros, deletarLivroId
}
