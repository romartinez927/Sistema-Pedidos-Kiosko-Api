export class Producto {
    #nombre
    #estado
    #adicionalesPredeterminados
    #aderezosPredeterminados
    #precio

    constructor({ nombre, estado, adicionalesPredeterminados, aderezosPredeterminados, precio }) {
        if (!nombre || typeof nombre !== 'string') throw new Error("falta el titulo")
        this.#nombre = nombre
        this.#estado = estado
        this.#precio = precio
        this.#adicionalesPredeterminados = adicionalesPredeterminados
        this.#aderezosPredeterminados = aderezosPredeterminados
    }

    get nombre() { return this.#nombre }
    get estado() { return this.#estado }
    get precio() { return this.#precio }
    get adicionalesPredeterminados() { return this.#adicionalesPredeterminados }
    get aderezosPredeterminados() { return this.#aderezosPredeterminados }

    datos() {
        return {
            nombre: this.#nombre,
            estado: this.#estado,
            precio: this.#precio,
            adicionalesPredeterminados: this.#adicionalesPredeterminados,
            aderezosPredeterminados: this.#aderezosPredeterminados
        }
    }
}