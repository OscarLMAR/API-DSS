const EstadoEquipo = require('../models/EstadoEquipo')
const{validationResult} = require('express-validator');

const crearEstadoEquipo = async(req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() });
        }

        let estadoEquipo = new EstadoEquipo({
            nombre: req.body.nombre,
            estado: req.body.estado,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date()
        });
    
        estadoEquipo= await estadoEquipo.save();
        res.send(estadoEquipo)
    
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear Estado de Equipo');
    }
}

const updateEstadoEquipo = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() })
        }

        const  {id}  = req.params
        const { nombre, estado } = req.body;
        let estadoEquipo = await EstadoEquipo.findById(id);
        if (!estadoEquipo) {
            return res.status(404).json({ msj: 'Marca no encontrado' })
        }

        estadoEquipo.nombre = nombre;
        estadoEquipo.estado = estado;
        estadoEquipo.fechaCreacion = new Date();
        estadoEquipo.fechaActualizacion = new Date();

        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar marca');
    }

}


const getEstadoEquipo = async (req, res) => {
    try {
        const estadoEquipo = await EstadoEquipoEquipo.find();
        res.send(estadoEquipo)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    crearEstadoEquipo,
    updateEstadoEquipo,
    getEstadoEquipo
}