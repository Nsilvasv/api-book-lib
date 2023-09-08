const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
    res.send("requisição get funcionando")
})

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