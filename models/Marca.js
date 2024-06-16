const {Schema, model} = require('mongoose')

const MarcaSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'Nombre Requerido']
    },
    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Inactivo']
    },
    fechacreacion: {
        type: Date,
        default: new Date()
    },
    ffechaActualizacion:{
        type: Date,
        deafult: new Date()

    }
})

module.exports = model ('Marca', MarcaSchema)