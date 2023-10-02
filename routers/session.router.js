import { deleteSesiones, getCurrentSessionController, postSesiones } from "../controllers/sessions.controller.js"
import { postUsuarios } from "../controllers/users.controller.js"
import { autenticacionUserPass } from "../middlewares/passport.js"
import { alreadyHasSession, auth } from "../middlewares/authentication.js"
import { Router } from "express"
// import * as productsController from "../controllers/products.controller.js"

export const sessionRouter = Router()

sessionRouter.post("/usuarios", alreadyHasSession, postUsuarios)
sessionRouter.post("/login", autenticacionUserPass, postSesiones)

sessionRouter.post("/logout", deleteSesiones)