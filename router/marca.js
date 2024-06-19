const { Router} = require('express')
const { check } = require('express-validator')
const{crearMarca,
    updateMarca, getMarca} = require('../controllers/MarcaController')
const {validarJWT} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router();

router.post('/', [validarJWT, validarRolAdmin],[
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], crearMarca)

router.put('/',[validarJWT, validarRolAdmin], [
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], updateMarca)

router.get('/', [validarJWT, validarRolAdmin],[
    check('nombre', 'invalid.nombre').not().isEmpty(),
    check('estado', 'invalid.estado').isIn(['Activo', 'Inactivo']),
], getMarca)

module.exports = router