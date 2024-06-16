const mongoose = require('mongoose')
require('dotenv').config();

const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        })
        console.log('CONEXION EXITOSA A MONGO ATLAS')
    } catch (e) {
        console.log('Error', e)
        throw new Error('ERROR AL CONECTAR A MONGO ATLAS')
    }
}
module.exports = {mongoConn}