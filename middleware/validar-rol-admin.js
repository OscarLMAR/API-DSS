const jwt = require('jsonwebtoken')

const validarRolAdmin = (req, res, next) =>{
    if(req.payload.rol != 'Administrador' ) {
        return res.status(401).json({
            msj: 'Error de autorizacion'
        })
    }
     next()
}

module.exports = {
    validarRolAdmin
}