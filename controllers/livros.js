const { getAllLivros, getLivroId } = require("../services/livros")

function getLivros(req, res) {
    try {
        const livros = getAllLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro (req, res) {
    try {
        const id = req.params.id
        const livro = getLivroId(id);
        res.send(livro)
    } catch (error) {   
        res.status(500)
        res.send(error.message)
    }
} 

module.exports = {getLivros, getLivro}