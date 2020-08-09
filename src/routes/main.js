const router =  require("express").Router()
const storage = require("../libs/storage")
const path = require("path")
const fs = require('fs')

// Main path
router.get("/", async (req, res) => { 
    const dir = await fs.promises.opendir(storage)
    const output = []

    for await(const element of dir) {
        output.push({
            name : element.name,
            isFile : element.isFile()
        }) 
    }
    
    console.log("El almacen esta en: " + storage)
    res.sendFile(path.join(__dirname + "/plantillaSubida.html"))
    // res.send(output)
})

// Descarga de ficheros
router.get("/:name", async (req, res)=>{
        let file = storage + "/" + req.params.name 
        res.download(file)
})

module.exports = router;