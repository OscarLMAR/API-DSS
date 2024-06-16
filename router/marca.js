const { Router} = require('express')
const { check } = require('express-validator')
const{crearMarca,
    updateMarca, getMarca} = require('../controllers/MarcaController')

const router = Router();

router.post('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], crearMarca)

router.put('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], updateMarca)

router.get('/', [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], getMarca)

module.exports = router