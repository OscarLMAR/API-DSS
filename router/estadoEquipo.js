const { Router} = require('express')
const { check } = require('express-validator')
const{ crearEstadoEquipo,
    updateEstadoEquipo, getEstadoEquipo} = require('../controllers/EstadoEquipoController')

const router = Router();

router.post('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], crearEstadoEquipo)

router.put('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], updateEstadoEquipo)

router.get('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], getEstadoEquipo)

module.exports = router