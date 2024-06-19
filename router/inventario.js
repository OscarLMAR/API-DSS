const { Router} = require('express')
const { check } = require('express-validator')
const{crearInventario, updateInventario, getInventarios} = require('../controllers/InventarioController')
const {validarJWT} = require('../middleware/validar-jwt')
const {validarRolAdmin} = require('../middleware/validar-rol-admin')
const router = Router();

router.post('/', [validarJWT, validarRolAdmin], [
    check('serial', 'invalid.serial').not().isEmpty(),
    check('modelo', 'invalid.modelo').not().isEmpty(),
    check('descripcion', 'invalid.descripcion').not().isEmpty(),
    check('fotoEquipo', 'invalid.fotoEquipo').not().isEmpty(),
    check('color', 'invalid.color').not().isEmpty(),
    check('fechaCompra', 'invalid.fechaCompra').not().isEmpty(),
    check('precio', 'invalid.precio').not().isEmpty(),
    check('usuarioEncargado', 'invalid.usuarioEncargado').not().isEmpty(),
    check('marca', 'invalid.marca').not().isEmpty(),
    check('estadoEquipo', 'invalid.estadoEquipo').not().isEmpty(),
    check('tipoEquipo', 'invalid.tipoEquipo').not().isEmpty()
], crearInventario)

router.put('/:id', [validarJWT, validarRolAdmin], [
    check('serial', 'invalid.serial').not().isEmpty(),
    check('modelo', 'invalid.modelo').not().isEmpty(),
    check('descripcion', 'invalid.descripcion').not().isEmpty(),
    check('fotoEquipo', 'invalid.fotoEquipo').not().isEmpty(),
    check('color', 'invalid.color').not().isEmpty(),
    check('fechaCompra', 'invalid.fechaCompra').not().isEmpty(),
    check('precio', 'invalid.precio').not().isEmpty(),
    check('usuarioEncargado', 'invalid.usuarioEncargado').not().isEmpty(),
    check('marca', 'invalid.marca').not().isEmpty(),
    check('estadoEquipo', 'invalid.estadoEquipo').not().isEmpty(),
    check('tipoEquipo', 'invalid.tipoEquipo').not().isEmpty()
], updateInventario)

router.get('/', [validarJWT],[
    check('serial', 'invalid.serial').not().isEmpty(),
    check('modelo', 'invalid.modelo').not().isEmpty(),
    check('descripcion', 'invalid.descripcion').not().isEmpty(),
    check('fotoEquipo', 'invalid.fotoEquipo').not().isEmpty(),
    check('color', 'invalid.color').not().isEmpty(),
    check('fechaCompra', 'invalid.fechaCompra').not().isEmpty(),
    check('precio', 'invalid.precio').not().isEmpty(),
    check('usuarioEncargado', 'invalid.usuarioEncargado').not().isEmpty(),
    check('marca', 'invalid.marca').not().isEmpty(),
    check('estadoEquipo', 'invalid.estadoEquipo').not().isEmpty(),
    check('tipoEquipo', 'invalid.tipoEquipo').not().isEmpty()
], getInventarios)

module.exports = router