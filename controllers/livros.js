const { getAllLivros, getLivroId, insereLivro, modificaLivros, deletarLivroId } = require("../services/livros")

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

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.send("Livro inserido com secesso!")
        res.status(201)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function pathLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        modificaLivros(body, id)
        res.send("item modificado com sucesoo")
        res.status(202)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        deletarLivroId(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { getLivros, getLivro, postLivro, pathLivro, deleteLivro }