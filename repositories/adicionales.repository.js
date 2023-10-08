import { adicionalesDaoMongoose } from '../dao/mongo/adicionales.dao.mongoose.js'
import { GenericRepository } from './Generic.repository.js'


class AdicionalesRepository extends GenericRepository{
    constructor(dao) { super(dao) }

    async getTotalPrice(adicionalesIds) {
        let total = 0;

        for (const adicionalId of adicionalesIds) {
          const adicional = await this.dao.getById(adicionalId)
      
          if (adicional && adicional.precio) {
            total += adicional.precio
          }
        }
      
        return total
    }
}

export const adicionalesRepository = new AdicionalesRepository(adicionalesDaoMongoose)