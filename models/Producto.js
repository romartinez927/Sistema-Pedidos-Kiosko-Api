export class Producto {
    #nombre
    #estado

    constructor({ nombre, estado }) {
        if (!nombre || typeof nombre !== 'string') throw new Error("falta el titulo")
        this.#nombre = nombre
        
        this.#estado = estado
    }

    get nombre() { return this.#nombre }
    get estado() { return this.#estado }

    datos() {
        return {
            nombre: this.#nombre,
            estado: this.#estado,
        }
    }
}