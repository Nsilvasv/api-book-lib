const fs = require("fs")

function getAllLivros() {
    return JSON.parse(fs.readFileSync("dados.json"))
}

function getLivroId(id) {
    const livro = JSON.parse(fs.readFileSync("dados.json"))
    const livroFiltrado = livro.filter(livro => livro.id === id ) [0]
    return livroFiltrado
}    

module.exports ={
    getAllLivros,
    getLivroId
}