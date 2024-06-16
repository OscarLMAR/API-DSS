const {Schema, model} = require('mongoose')   

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        require: [true, 'Nombre Requerido'],
    },

    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Inactivo']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    rol: {
        type: String,
        requerid: [true, 'Rol Requerido'],
        enum: ['Administrador', 'Docente']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date,
        dafault: new Date
    }
})

module.exports = model('Usuario', UsuarioSchema)