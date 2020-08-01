// const {Router} =  require('express')
const router =  require("express").Router()

router.get("/cosa", (req, res) =>{
    // res.send("Hola people")
    const data = {
        "name" : "MoD",
        "email" : "mail@mail.com"
    }

    res.json(data)
})

module.exports = router;