const { Router} = require('express')
const { check } = require('express-validator')
const{crearUsuario, updateUsuario, getUsuarios} = require('../controllers/UsuarioController')

const router = Router();

router.post('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
    check('email', 'invalid.email').not().isEmpty(),
    check('rol', 'invalid.rol').not().isEmpty(),
    check('password', 'invalid.password').not().isEmpty()
], crearUsuario)

router.put('/:id', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
    check('email', 'invalid.email').not().isEmpty(),
    check('rol', 'invalid.rol').not().isEmpty(),
    check('password', 'invalid.password').not().isEmpty()
], updateUsuario)

router.get('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
    check('email', 'invalid.email').not().isEmpty(),
    check('rol', 'invalid.rol').not().isEmpty(),
    check('password', 'invalid.password').not().isEmpty()
], getUsuarios)

module.exports = router
