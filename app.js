const express = require("express")
const rotaLivros = require("./routes/livros")

const app = express()


app.use("/livros", rotaLivros)

app.listen(8000, () => {
    console.log("servidor rodando");
})