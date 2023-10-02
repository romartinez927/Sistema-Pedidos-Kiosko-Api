import jwt from 'jsonwebtoken';

// function encriptar(user) {
// const token = jwt.sign({id: user._id}, "PRIVATE_KEY", { expiresIn: '24h' })
// return token
// }

const generarToken = (usuario) => {
    return jwt.sign({ id: usuario._id }, 'tu_secreto', { expiresIn: '1h' });
  };

export async function postSesiones(req, res, next) {
    const token = generarToken(req.user);
    res.json({ token });
}

export function deleteSesiones(req, res, next) {
    req.logout(err => {
        res.sendStatus(200)
    })
}

export function getCurrentSessionController(req, res, next) {
    res.json(req.user)
}