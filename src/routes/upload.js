const router =  require("express").Router()
const fileupload = require("express-fileupload")

router.use(fileupload())

router.post("/upload", (req, res)=> {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No se han subido archivos.")
    }

    let file = req.files.foto //foto debe ser el campo nombre del input field en el form
    
    // console.log("Me enviaron " + req.files.foto.name);
    // console.log("Me enviaron " + req.files.OtraFoto.name);
    // res.send("Toy haciendo cosas")

    file.mv(`../subidas/${file.name}`, err => {
        if (err) {
            console.log(err)
            return res.status(500).send({
                message : `Error al guardar: ${err}`
            })
        }

        return res.status(200).send({
            message : "Archivo subido."
        })
    })
    
})

// router.get("/upload", (req, res)=>{
//     // TODO: descargar fichero
//     res.send("aqui tu ficherito locuelo")

//     // let file = __dirname + " ../../../../subidas/carnet.png"

//     // res.download(file)
//     // console.log("envio: " + __dirname + " ../../../subidas/carnet.png")
// })


module.exports = router