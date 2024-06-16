
const{validationResult} = require('express-validator');
const TipoEquipo = require('../models/TipoEquipo');

const crearTipoEquipo = async(req, res) => {

    try {
        
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({msj: errors.array()});
    }

    let tipoEquipo = new TipoEquipo({
        nombre: req.body.nombre,
        estado: req.body.estado,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date()
    });

    tipoEquipo= await tipoEquipo.save();
    res.send(tipoEquipo)


    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear usuario')
    }
}

const updateTipoEquipo = async(req, res) => {

    try {
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.status(400).json({msj: errors.array()});
        }

        const {id} = req.params.id;
        const {nombre, estado} = req.body;
        let tipoEquipo = await TipoEquipo.findById(id);
        if(!tipoEquipo) {
            return res.status(404).json({msj: 'Tipo de Equipo no encontrado'});
        }

        tipoEquipo.nombre = nombre;
        tipoEquipo.estado = estado;
        tipoEquipo.fechaCreacion = new Date();
        tipoEquipo.fechaActualizacion = new Date();

        tipoEquipo = await TipoEquipo.save();
        res.send(tipoEquipo)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar tipo de equipo')
    }
}

const getTipoEquipo = async (req, res) => {
    try {
        const tipoEquipo = await TipoEquipo.find();
        res.send(tipoEquipo)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    crearTipoEquipo,
    updateTipoEquipo,
    getTipoEquipo
}