const { getAllLivros, getLivroId, insereLivro, modificaLivros, deletarLivroId } = require("../services/livros")

function getLivros(req, res) {
    try {
        const livros = getAllLivros()
        res.send(livros).status(200)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro (req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroId(id);
            res.send(livro)
        } else {
            res.status(422)
            res.send("id invaĺido")
        }

    } catch (error) {   
        res.status(500)
        res.send(error.message)
    }
} 

async function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            insereLivro(livroNovo)
            res.send("Livro inserido com secesso!")
            res.status(201)

            const response = await LivroModel.create(Livro)

            if(!response){
                return res.status(400).send({message: "error"})
            }

        } else {
            res.status(422)
            res.send("Campo é obrigatório")
        }
      
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
 
function pathLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)) {
            modificaLivros(body, id)
            res.send("item modificado com sucesoo")
            res.status(202)
        } else {
            res.status(422)
            res.send("id invaĺido")
        }     
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletarLivroId(id)
            res.send("livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("id invaĺido")
        }
       
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



module.exports = { getLivros, getLivro, postLivro, pathLivro, deleteLivro }