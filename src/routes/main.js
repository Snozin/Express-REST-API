// const {Router} =  require('express')
const router =  require("express").Router()

// router.get("/", (req, res) => {
    // res.send("Hola people")
    // const data = {
        // "name" : "MoD",
        // "email" : "mail@mail.com"
    // }
    
    // res.json(data)
// })


router.get("/", (req, res) => { 
    // TODO: descargar fichero
    // res.send("Te respuendo")
    res.send("Te respuendo")

    // let file = __dirname + " ../../../../subidas/carnet.png"

    // res.download(file)
    // console.log("envio: " + __dirname + " ../../../subidas/carnet.png")
})

module.exports = router;