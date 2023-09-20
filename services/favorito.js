const fs = require("fs")

function getAllFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse( fs.readFileSync("favoritos.json") )

    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavoritoId(id) {
    const livros = JSON.parse( fs.readFileSync("dados.json") )
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )

    const livroInserido = livros.find( livro => livro.id === id) // passa por livros que tem ids iguais aos recebidos
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {getAllFavoritos, deletaFavoritoPorId, insereFavoritoId}