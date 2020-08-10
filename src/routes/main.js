const router =  require("express").Router()
const storage = require("../libs/storage")
const fs = require('fs').promises

// Main path
router.get("/", async (req, res) => { 
    const dir = await fs.opendir(storage)
    const output = []

    for await(const element of dir) {
        output.push({
            name : element.name,
            isFile : element.isFile()
        }) 
    }
    
    console.log("El almacen esta en: " + storage)
    // res.sendFile(__dirname + "/plantillaSubida.html")
    res.send(output)
})

// Descarga de ficheros
router.get("/:name", (req, res)=>{
    let file = storage + "/" + req.params.name 
    res.download(file)
})

router.delete("/:name", async (req, res)=>{
    await fs.unlink(`${storage}/${req.params.name}`)
    .catch((err)=>{
        console.log("error deleting",
        err)
    })
    res.redirect("/")
})

module.exports = router;