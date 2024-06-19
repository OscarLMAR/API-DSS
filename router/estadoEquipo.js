const { Router} = require('express')
const { check } = require('express-validator')
const{ crearEstadoEquipo,
    updateEstadoEquipo, getEstadoEquipo} = require('../controllers/EstadoEquipoController')
const {validarJWT} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router();

router.post('/', [validarJWT, validarRolAdmin],[
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], crearEstadoEquipo)

router.put('/', [validarJWT, validarRolAdmin],[
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], updateEstadoEquipo)

router.get('/', [validarJWT, validarRolAdmin],[
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], getEstadoEquipo)

module.exports = router