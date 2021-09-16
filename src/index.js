const express = require('express');

const server = express();

server.get('/pacientes',(req,res)=>{
    res.send("Teste");
})




server.listen(3000,()=>{
    console.log("api online");
});