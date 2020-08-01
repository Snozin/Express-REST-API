const express = require ('express');
const app = express()

const morgan = require('morgan');


// settings
app.set("port", process.env.PORT || 1414)
app.set("json spaces", 2)

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded( {extended:false} ))

// routes
app.use(require("./routes/main"))
app.use(require("./routes/upload"))

// starting the server
app.listen(app.get("port"), ()=>{
    console.log(`Server listening on port ${app.get("port")}`)
})

// app.get("/", (req, res) =>{
//     res.send("Hola mundo")
// })

// app.listen(app.get("port"))