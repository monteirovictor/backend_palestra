const express = require('express');

const router = express.router();

const PacienteController = require('../controller/PacienteController');


router.post('/Paciente',PacienteController.create);

module.exports = router;