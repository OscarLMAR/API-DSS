const express = require('express')
const app = express()
const { mongoConn } = require('./bd/conecctionbd')
const usuarios = require('./router/usuario')
const tipoEquipo = require('./router/tipoEquipo')
const marca = require('./router/marca')
const estadoEquipo = require('./router/estadoEquipo')
const inventario = require('./router/inventario')
require('dotenv').config();

app.use(express.json());


mongoConn();

app.use('/auth', require('./router/auth'))
app.use('/usuario', usuarios)
app.use('/tipoEquipo', tipoEquipo)
app.use('/marca', marca)
app.use('/estadoEquipo', estadoEquipo)
app.use('/inventario', inventario)

app.set('port', process.env.PORT || 8080)
app.listen(app.get('port'), () => {
    console.log(`servidor arranco por puerto ${app.get('port')}`)
})