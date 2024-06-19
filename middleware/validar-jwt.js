const jwt = require('jsonwebtoken')

const validarJWT =(req, res, next) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({msj: 'Error de autorizacion'})
    }

    try {
        const payload = jwt.verify(token, '12345');
        req.payload = payload;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({msj: 'Error de autorizacion'})
    }

}

module.exports = {
    validarJWT
}