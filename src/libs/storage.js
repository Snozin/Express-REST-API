require("dotenv").config()
const storage = process.env.STORAGE
const fs = require('fs')

// Comprobar si la ruta existe en el fichero de config
if(!storage) {
        console.log(
                "Storage path is not defined.",
                "Set a valid STORAGE path in .env config file"
            )
            process.exit(1)
}

// Comprobar si la ruta especificada existe y si no crearla
fs.access(storage, (err)=>{
    if (err && err.code === "ENOENT"){
        console.log("Folder especified at STORAGE path does not exists")

        fs.mkdirSync(storage, (err)=>{
            console.log("error creando la carpeta",
            err)
            process.exit(1)
        })
        console.log("Folder created")
    }
})
module.exports = storage