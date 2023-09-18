export class Producto {
    #nombre
    #estado
    #adicionalesPredeterminados
    #aderezosPredeterminados

    constructor({ nombre, estado, adicionalesPredeterminados, aderezosPredeterminados }) {
        if (!nombre || typeof nombre !== 'string') throw new Error("falta el titulo")
        this.#nombre = nombre
        
        this.#estado = estado
        this.#adicionalesPredeterminados = adicionalesPredeterminados
        this.#aderezosPredeterminados = aderezosPredeterminados
    }

    get nombre() { return this.#nombre }
    get estado() { return this.#estado }
    get adicionalesPredeterminados() { return this.#adicionalesPredeterminados }
    get aderezosPredeterminados() { return this.#aderezosPredeterminados }

    datos() {
        return {
            nombre: this.#nombre,
            estado: this.#estado,
            adicionalesPredeterminados: this.#adicionalesPredeterminados,
            aderezosPredeterminados: this.#aderezosPredeterminados
        }
    }
}