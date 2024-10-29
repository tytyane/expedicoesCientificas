import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import explorer_route from "./routes/explorer_route.js"
import species_route from "./routes/species_route.js"
import expedition_route from "./routes/expedition_route.js"

dotenv.config()
connectDB()

const port = process.env.PORT || 6000
const app = express()
app.use(express.json())


app.use('/explorer', explorer_route)
app.use('/species', species_route)
app.use('/expedition', expedition_route)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

export default app