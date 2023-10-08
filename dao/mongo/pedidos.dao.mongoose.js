import { Schema } from 'mongoose'
import mongoose from 'mongoose'
import { DaoMongoose } from './DaoMongoose.js'

const pedidosCollection = 'pedidos'

const pedidoSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: "products" },
  titulo: { type: String},
  estado: { type: String, default: 'empezar preparacion' },
  orden: { type: String, default: "" },
  total: { type: Number, default: 0 },
  cantidad: { type: Number, required: true },
  adicionales: { type: Array, default: [], ref: "adicionales" },
  aderezos: { type: Array, default: [], ref: "aderezos"},
  nota: { type:String, default: "" }
}, {versionKey: false,
    timestamps: true})

export const pedidoModel = mongoose.model(pedidosCollection, pedidoSchema)

export const pedidosDaoMongoose = new DaoMongoose(pedidoModel)