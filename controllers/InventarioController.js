const Inventario = require('../models/Inventario')
const { validationResult } = require('express-validator')
const { patch } = require('../router/inventario')


const getInventarios = async (req, res) => {
    try {
        const inventario = await Inventario.find().populate([

            {
                path: 'usuarioEncargado', select: 'nombre email estado'
            },

            {
                path: 'marca', select: 'nombre estado'
            },

            {
                path: 'estadoEquipo', select: 'nombre estado'
            },

            {
                path: 'tipoEquipo', select:'nombre estado'
            }
        ]);
        res.send(inventario)
    } catch (error) {
        console.log(error)
    }
}
const crearInventario = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() });
        }
        const existeInventario = await Inventario.findOne({ serial: req.body.serial });
        if (existeInventario) {
            return res.status(400).send('Ya existe el serial para otro equipo')
        }

        let inventario = new Inventario({
            serial: req.body.serial,
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            fotoEquipo: req.body.fotoEquipo,
            color: req.body.color,
            fechaCompra: req.body.fechaCompra,
            precio: req.body.precio,
            usuarioEncargado: req.body.usuarioEncargado,
            marca: req.body.marca,
            estadoEquipo: req.body.estadoEquipo,
            tipoEquipo: req.body.tipoEquipo
        });


        inventario = await inventario.save();
        res.send(inventario)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear inventario')
    }
}

const updateInventario = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() })
        }

        const { id } = req.params
        const {serial, modelo, descripcion, fotoEquipo, color, fechaCompra,
             precio, usuarioEncargado, marca, estadoEquipo, tipoEquipo} = req.body;
        let inventario = await Inventario.findById(id);
        if (!inventario) {
            return res.status(404).json({ msj: 'Usuario no encontrado' })
        }

        inventario.serial = serial;
        inventario.modelo = modelo;
        inventario.descripcion = descripcion;
        inventario.fotoEquipo = fotoEquipo;
        inventario.color = color;
        inventario.fechaCompra = fechaCompra;
        inventario.precio = precio;
        inventario.usuarioEncargado = usuarioEncargado;
        inventario.marca = marca;
        inventario.estadoEquipo = estadoEquipo;
        inventario.tipoEquipo = tipoEquipo;
        inventario.fechaCreacion = new Date();
        inventario.fechaActualizacion = new Date();

        usuario = await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar el usuario');
    }

}

module.exports = {
    crearInventario,
    updateInventario,
    getInventarios
}