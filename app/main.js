import express from "express"
import session from 'express-session'
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser'
import MongoStore from "connect-mongo"
import { URL } from '../config/database.config.js'
import { conectar } from "../database/mongoose.js"
import { apiRouter } from "../routers/api.router.js"
import { Server as SocketIOServer } from "socket.io"
import { passportInitialize, passportSession } from '../middlewares/passport.js'

conectar()

dotenv.config({path:"./api/.env"})
export const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 1000
    }),
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}))

app.use(passportInitialize, passportSession)

const PORT = 4000
const httpServer = app.listen(PORT)

const io = new SocketIOServer(httpServer, {
    cors: {
        origin: ["https://deluxe-lolly-660eac.netlify.app", "http://localhost:5173"],
        methods: ["GET", "POST"]
    }
})

io.on("connection", async clientSocket => {
    console.log(`Usuario conectado ${clientSocket.id}`)
    clientSocket.on("send_message", (data) => {
        clientSocket.broadcast.emit("enviar_estado", data)
    })

    clientSocket.on("send_prueba", (data) => {
        const prueba = data.message
        // console.log(prueba)
        clientSocket.broadcast.emit("enviar_prueba", prueba)
    })
})

app.use("/", apiRouter)

console.log(`Escuchando en port ${PORT}`)

