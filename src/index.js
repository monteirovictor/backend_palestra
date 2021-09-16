const express = require('express');

const server = express();

server.get('/pacientes',(req,res)=>{
    res.send("oláas");
})




server.listen(3000,()=>{
    console.log("api online");
});