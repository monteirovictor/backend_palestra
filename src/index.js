const express = require('express');
const server = express();
server.use(express.json());

const PacienteRoutes = require('./routes/PacienteRoutes');

server.use('/Paciente',PacienteRoutes);


server.listen(3010,()=>{
    console.log("api online");
});