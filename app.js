const express = require("express")
const rotaLivros = require("./routes/livros")
const rotaFavoritos = require("./routes/favoritos")
const cors = require("cors")

const app = express()

app.use(express.json()) // para receber um corpo de req em json
app.use(cors( {origin: "*"} ))

app.use("/livros", rotaLivros)
app.use("/favoritos", rotaFavoritos)

app.listen(8000, () => {
    console.log("servidor rodando");
})