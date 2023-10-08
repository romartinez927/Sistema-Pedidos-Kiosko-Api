import { productosDaoMongoose } from '../dao/mongo/product.dao.mongoose.js'
import { GenericRepository } from './Generic.repository.js'

class ProductosRepository extends GenericRepository{
    constructor(dao) { super(dao) }
    
    async getTotalPrice(productId, quantity) {
        const product = await this.dao.getById(productId)
        if (product) {
            let productPrice = product.precio
            let total = productPrice * quantity
            return total
        }

    }

    async updateCart(cartId, cart) {
        const result = await this.dao.updateById(cartId, cart)
        return result
    }

    async addProductToCart(productId, cartId) {
    const cart = await this.dao.getById(cartId)
    const product = cart.products.find((item) => item.product == productId)
    if (product) {
        product.cantidad++
    } else {
        let product = { product: productId }
        cart.products.push(product)
    }
    this.updateCart(cartId, cart)
    return cart
}

}

export const productosRepository = new ProductosRepository(productosDaoMongoose)