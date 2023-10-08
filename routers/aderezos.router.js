import express, { Router } from "express"
import * as aderezosController from "../controllers/aderezos.controller.js"
export const aderezosRouter = Router()

aderezosRouter.get('/', aderezosController.handleGet)
aderezosRouter.get('/:aderezo', aderezosController.handleGetById)
aderezosRouter.post('/', aderezosController.handlePost)
aderezosRouter.put('/:aderezo', aderezosController.handlePut)
aderezosRouter.delete('/:aderezo', aderezosController.handleDelete)
