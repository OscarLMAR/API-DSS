const { Router} = require('express')
const { check } = require('express-validator')
const { crearTipoEquipo,
    updateTipoEquipo, getTipoEquipo } = require('../controllers/TipoEquipoController')
const { validarJWT } = require('../middleware/validar-jwt')
const { validarRolAdmin } = require('../middleware/validar-rol-admin')
const router = Router();

router.post('/', [validarJWT, validarRolAdmin],[
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], crearTipoEquipo)

router.put('/',[validarJWT, validarRolAdmin], [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], updateTipoEquipo)

router.get('/',[validarJWT, validarRolAdmin], [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], getTipoEquipo)

module.exports = router