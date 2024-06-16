const {Schema, model} = require('mongoose')

const InventarioSchema = Schema ({
    serial: {
        type: String,
        requerid: true,
        unique: true,
    },
    modelo: {
        type: String,
        requerid: true,
        unique: true,
    },
    descripcion: {
        type: String,
        requerid: true
    },
    fotoEquipo: {
        type: String,
        requerid: true
    },
    color: {
        type: String,
        requerid: true
    },
    fechaCompra: {
        type: String,
        requerid: true
    },
    precio: {
        type: Number,
        requerid: true
    },
    usuarioEncargado: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        requerid: true
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        requerid: true,
    },
    estadoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        requerid: true
    },
    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        requerid: true
    }
})

module.exports = model ('Inventario', InventarioSchema)