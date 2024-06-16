const Usuario = require('../models/Usuario')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')


const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios)
    } catch (error) {
        console.log(error)
    }
}
const crearUsuario = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() });
        }
        const { nombre, estado, email, rol, password } = req.body;
        const existeUsuario = await Usuario.findOne({ email: req.body.email });
        if (existeUsuario) {
            return res.status(400).send('Email ya existe')
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let usuario = new Usuario({
            nombre,
            estado,
            email,
            rol,
            password: hashedPassword,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date()
        });


        usuario = await usuario.save();
        res.send(usuario)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear usuario')
    }
}

const updateUsuario = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msj: errors.array() })
        }

        const { id } = req.params
        const { nombre, estado, email, rol, password } = req.body;
        let usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ msj: 'Usuario no encontrado' })
        }

        usuario.nombre = nombre;
        usuario.estado = estado;
        usuario.email = email;
        usuario.rol = rol;
        usuario.password = password;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();

        usuario = await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar el usuario');
    }

}

module.exports = {
    crearUsuario,
    updateUsuario,
    getUsuarios
}