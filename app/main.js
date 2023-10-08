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


const corsOptions = {
    origin: ["https://sistema-kiosko.netlify.app", "http://localhost:5173"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
app.use(cors(corsOptions));

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

app.use("/", apiRouter)


console.log(`Escuchando en port ${PORT}`)

