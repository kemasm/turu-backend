const express = require("express")
const cors = require("cors")
// libary utk membaca request header dar user
const bearerToken = require('express-bearer-token')

const port = process.env.PORT || 8000

// konfigurasi dengan express nya dulu
const app = express()
// menjalankan middleware
app.use(cors())
app.use(express.json())
app.use(bearerToken())

// utk sequelize
const {sequelize} = require("./lib/sequelize")
// sequelize.sync({ alter: true })

//menjalankan port
app.listen(port, () => console.log("API running :" , port))