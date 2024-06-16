const { Router} = require('express')
const { check } = require('express-validator')
const{crearTipoEquipo,
    updateTipoEquipo, getTipoEquipo} = require('../controllers/TipoEquipoController')

const router = Router();

router.post('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], crearTipoEquipo)

router.put('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], updateTipoEquipo)

router.get('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], getTipoEquipo)

module.exports = router