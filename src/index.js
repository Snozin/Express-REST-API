require('dotenv').config()
const express = require ('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Settings
app.set("port", process.env.PORT)
app.set("json spaces", 2)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
// app.use(express.urlencoded( {extended:false} ))

// Routes
app.use(require("./routes/main"))
app.use(require("./routes/upload"))

// Server
app.listen(app.get("port"), ()=>{
    console.log(`Server listening on port ${app.get("port")}`)
})
