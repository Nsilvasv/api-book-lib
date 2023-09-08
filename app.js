const express = require("express")
const rota = require("./routes/livros")

const app = express()

app.use("/livros", rota)

app.listen(8000, () => {
    console.log("servidor rodando");
})