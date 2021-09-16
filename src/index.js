const express = require('express');

const server = express();

server.use(express.json());

const PacienteRoutes = require('./routes/PacienteRoutes');

server.use('/paciente',PacienteRoutes);


server.listen(3000,()=>{
    console.log("api online");
});