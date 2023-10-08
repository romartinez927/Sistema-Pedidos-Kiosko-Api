export class Adicional {
    #nombre
    #precio

    constructor({ nombre, precio }) {
        if (!nombre || typeof nombre !== 'string') throw new Error("falta el titulo")
        this.#nombre = nombre
        this.#precio = precio
    }

    get nombre() { return this.#nombre }
    get precio() { return this.#precio }

    datos() {
        return {
            nombre: this.#nombre,
            precio: this.#precio,
        }
    }
}