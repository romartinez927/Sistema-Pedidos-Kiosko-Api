import { Aderezo } from "../models/Aderezo.js"
import { aderezosRepository } from "../repositories/aderezos.repository.js"

export async function handleGet(req, res, next) {
    try {
        const adicionales = await aderezosRepository.obtenerTodos()
        res.json(adicionales)
    } catch (error) {
        next(error)
    }
}

export async function handleGetById(req, res, next) {
    try {
        const aderezo = await aderezosRepository.obtenerSegunId(req.params.aderezo)
        res.json(aderezo)
    } catch (error) {
        next(error)
    }
}

export async function handlePost(req, res, next) {
    try {
        const aderezo = new Aderezo(req.body)
        const aderezoGuardado = await aderezosRepository.create(aderezo.datos())
        res.json(aderezoGuardado)
    } catch (error) {
        next(error)
    }
}


export async function handlePut(req, res, next) {
    try {
        const aderezoReemplazado = await aderezosRepository.updateOne(req.params.aderezo, req.body)
        res.json(aderezoReemplazado)
    } catch (error) {
        return next(error)  
    }
}

export async function handleDelete(req, res, next) {
    try {
        const borrada = await aderezosRepository.borrarSegunId(req.params.aderezo)
        res.json(borrada)
    } catch (error) {
        next(error)
    }
}