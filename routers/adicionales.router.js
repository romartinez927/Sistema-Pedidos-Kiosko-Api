import express, { Router } from "express"
import * as adicionalesController from "../controllers/adicionales.controller.js"
export const adicionalesRouter = Router()

adicionalesRouter.get('/', adicionalesController.handleGet)
adicionalesRouter.get('/:adicional', adicionalesController.handleGetById)
adicionalesRouter.post('/', adicionalesController.handlePost)
adicionalesRouter.put('/:adicional', adicionalesController.handlePut)
adicionalesRouter.delete('/:adicional', adicionalesController.handleDelete)


