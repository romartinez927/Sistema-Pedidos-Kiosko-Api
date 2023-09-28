export class Pedido {
    #id
    #product_id
    #estado
    #adicionales
    #aderezos
    #cantidad
    #nota

    constructor({ product_id, estado, cantidad, adicionales, aderezos, nota }) {
        this.#product_id = product_id
        this.#estado = estado
        this.#adicionales = adicionales
        this.#cantidad = cantidad
        this.#aderezos = aderezos
        this.#nota = nota
    }

    get id() { return this.#id }
    get products() { return this.#product_id }
    get estado() { return this.#estado }
    get cantidad() { return this.#cantidad }
    get adicionales() { return this.#adicionales }
    get nota() { return this.#nota }
    get aderezos() { return this.#aderezos }

    datos() {
        return {
            id: this.#id,
            product_id: this.#product_id,
            estado: this.#estado,
            cantidad: this.#cantidad,
            adicionales: this.#adicionales,
            aderezos: this.#aderezos,
            nota: this.#nota,
        }
    }
}