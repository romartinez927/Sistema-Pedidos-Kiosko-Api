import { encriptar } from "../utils/crypto.js"

import { usersRepository } from "../repositories/users.repository.js"

export async function postUsuarios(req, res) {
    const {email, password, first_name,} = req.body
    const data = {
        email,
        first_name,
        password: encriptar(password)
    }
    const usuarioCreado = await usersRepository.create(data)
    req.session.user = {
        first_name: usuarioCreado.first_name,
        role: "user",
        email: usuarioCreado.email,
    }


    req.login(usuarioCreado, error => {
        if (error) {
            next(new Error('falló el login!'))
        } else {
            res.status(201).send(req.usuarioCreado)
        }
    })
}