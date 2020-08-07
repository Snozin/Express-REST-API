const router =  require("express").Router()
const path = require('path')

router.get("/", (req, res) => { 
    // TODO: descargar fichero
        // let file = __dirname + " ../../../../subidas/carnet.png"
        // res.download(file)
        // console.log("envio: " + __dirname + " ../../../subidas/carnet.png")

    const fs = require('fs')

    function preba() {
        // const path = require('path')

        // require('dotenv/config')
        // const storage = process.env.STORAGE

        // return path 
        // return await fs.promises.opendir(__dirname + " ../../../../subidas")
    }
    console.log(__dirname)

    // res.send("Te respuendo")
    res.sendFile(path.join(__dirname + "/plantillaSubida.html"))
})

module.exports = router;