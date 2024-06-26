const {Schema, model} = require('mongoose')

const TipoEquipoSchema = Schema ({

    nombre: {
        type: String,
        requerid: [true, 'Nombre requerido'],
    },
    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Inactivo'],
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model ('TipoEquipo', TipoEquipoSchema)