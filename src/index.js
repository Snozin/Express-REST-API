const express = require ('express');
const app = express();
const port = 1414;

const morgan = require('morgan');

// middlewares
app.use(morgan('dev'));


// starting the server
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})