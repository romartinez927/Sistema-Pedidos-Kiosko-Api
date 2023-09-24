import { Adicional } from "../models/Adicional.js"
import { adicionalesRepository } from "../repositories/adicionales.repository.js"

export async function handleGet(req, res, next) {
    try {
        const adicionales = await adicionalesRepository.obtenerTodos()
        res.json(adicionales)
    } catch (error) {
        next(error)
    }
}

export async function handlePost(req, res, next) {
    try {
        const adicional = new Adicional(req.body)
        const adicionalGuardado = await adicionalesRepository.create(adicional.datos())
        res.json(adicionalGuardado)
    } catch (error) {
        next(error)
    }
}

export async function handlePut(req, res, next) {
    try {
        const adicionalReemplazado = await adicionalesRepository.updateOne(req.params.adicional, req.body)
        res.json(adicionalReemplazado)
    } catch (error) {
        return next(error)  
    }
}