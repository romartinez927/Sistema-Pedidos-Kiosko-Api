import { Schema } from 'mongoose'
import mongoose from 'mongoose'
import { DaoMongoose } from './DaoMongoose.js'

const adicionalesCollection = 'adicionales'

const adicionalSchema = new Schema({
    nombre: { type: String, required: true },
    estado: { type: Boolean, default: true },
    precio: { type: Number }
}, {versionKey: false})

export const adicionalModel = mongoose.model(adicionalesCollection, adicionalSchema)

export const adicionalesDaoMongoose = new DaoMongoose(adicionalModel)