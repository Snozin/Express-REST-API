const router =  require("express").Router()
const storage = require("../libs/storage")
const fs = require('fs')

router.get("/", async (req, res) => { 
    // TODO: descargar fichero
        // let file = __dirname + " ../../../../subidas/carnet.png"
        // res.download(file)
        // console.log("envio: " + __dirname + " ../../../subidas/carnet.png")

    const dir = await fs.promises.opendir(storage)
    const output = []

    for await(const element of dir) {
        output.push({
            name : element.name,
            isFile : element.isFile()
        }) 
    }
    
    console.log("El almacen esta en: " + storage)
    res.send(output)
})

module.exports = router;