const { Router } = require("express")
const { getLivros, getLivro } = require("../controllers/livros")

const router = Router()

router.get("/", getLivros)
router.get("/:id", getLivro)

router.post("/", (req, res) => {
    res.send("requisição post funcionando")
})

router.patch("/", (req, res) => {
    res.send("requisição patch funcionando")
})

router.delete("/", (req, res) => {
    res.send("requisição delete funcionando")
})

module.exports = router