export class Pedido {
    #id
    #product_id
    #titulo
    #estado
    #adicionales
    #aderezos
    #cantidad
    #nota
    #total

    constructor({ titulo, total, product_id, estado, cantidad, adicionales, aderezos, nota }) {
        this.#product_id = product_id
        this.#titulo = titulo
        this.#estado = estado
        this.#adicionales = adicionales
        this.#cantidad = cantidad
        this.#aderezos = aderezos
        this.#nota = nota
        this.#total = total
    }

    get id() { return this.#id }
    get product_id() { return this.#product_id }
    get titulo() { return this.#titulo }
    get estado() { return this.#estado }
    get cantidad() { return this.#cantidad }
    get adicionales() { return this.#adicionales }
    get nota() { return this.#nota }
    get aderezos() { return this.#aderezos }
    get total() { return this.#total }

    datos() {
        return {
            id: this.#id,
            product_id: this.#product_id,
            titulo: this.#titulo,
            estado: this.#estado,
            cantidad: this.#cantidad,
            adicionales: this.#adicionales,
            aderezos: this.#aderezos,
            nota: this.#nota,
            total: this.#total,
        }
    }
}