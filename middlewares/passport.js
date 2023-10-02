import passport from "passport"
import { Strategy } from "passport-local"
import { validarPassword } from "../utils/crypto.js"
import { usersRepository } from "../repositories/users.repository.js"

passport.use('local', new Strategy({ usernameField: 'email' }, async (username, password, done) => {
    const usuarioEncontrado = await usersRepository.getUserByEmail(username)
    if (!usuarioEncontrado)
        return done(console.log("error de autenticacion"))
    if (!validarPassword(password, usuarioEncontrado.password))
        return done(console.log("error de autenticacion"))
    delete usuarioEncontrado.password
   
    done(null, usuarioEncontrado)
}))

passport.serializeUser((user, next) => { next(null, user) })
passport.deserializeUser((user, next) => { next(null, user) })

export const passportInitialize = passport.initialize()
export const passportSession = passport.session()

export const autenticacionUserPass = passport.authenticate('local', { failWithError: true })