const Usuario = require('../models/Usuario')
const { Router} = require('express')
const { check } = require('express-validator')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt')
const router = Router()

router.post('/', [
    check('email', 'invalid.email').not().isEmpty(),
    check('password', 'invalid.password').not().isEmpty()
],async function (req, res){
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() });
        }
        const usuario = await Usuario.findOne({ email: req.body.email });
        if (!usuario) {
            return res.status(400).json({msj: 'user not found'});
        }

        const esIgual = bcrypt.compare(req.body.password, usuario.password);
        if(!esIgual){
            return res.status(400).json({msj: 'user not found'});
        }

        const token = generarJWT(usuario);

        res.json({
            _id: usuario._id, 
            nombre: usuario.nombre,
            rol: usuario.rol, 
            email: usuario.email,
            access_token: token
        });

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear usuario')
    }


}) 

module.exports = router
