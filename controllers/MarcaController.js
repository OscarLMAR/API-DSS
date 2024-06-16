const Marca = require('../models/Marca')
const{validationResult} = require('express-validator');

const crearMarca = async(req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() });
        }

        let marca = new Marca({
            nombre: req.body.nombre,
            estado: req.body.estado,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date()
        });
    
        marca= await marca.save();
        res.send(marca)
    
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear marca');
    }
}

const updateMarca = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() })
        }

        const  {id}  = req.params
        const { nombre, estado } = req.body;
        let marca = await Marca.findById(id);
        if (!marca) {
            return res.status(404).json({ msj: 'Marca no encontrado' })
        }

        marca.nombre = nombre;
        marca.estado = estado;
        marca.fechaCreacion = new Date();
        marca.fechaActualizacion = new Date();

        marca = await marca.save();
        res.send(marca);
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar marca');
    }

}


const getMarca = async (req, res) => {
    try {
        const marca = await Marca.find();
        res.send(marca)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    crearMarca,
    updateMarca,
    getMarca
}