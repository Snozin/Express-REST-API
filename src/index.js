const express = require ('express');
const app = express()

const morgan = require('morgan');


// settings
app.set("port", process.env.PORT || 1414)

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded( {extended:false} ))

// routes
app.get("/", (req, res) =>{
    res.send("Hola people")
})

// starting the server
app.listen(app.get("port"), ()=>{
    console.log(`Server listening on port ${app.get("port")}`)
})

// app.get("/", (req, res) =>{
//     res.send("Hola mundo")
// })

// app.listen(app.get("port"))