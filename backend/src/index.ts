import express from "express";
import cors from "cors";
import sequelize from "./config/Connection";
import routes from "./routes/Routes"

const app = express()

// const corsOptions = {
//     origin: 'http://example.com', // substitua com o domínio que você quer permitir
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };
  
app.use(cors());

app.use(routes)

app.listen(4000, () => {
    console.log("Sevidor ligado!");
})

const connectionDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log("Conectado ao banco de dados!");
    } catch (error) {
        console.log("Erro ao se conectar ao banco de dados.", error);
    }
}
connectionDatabase()