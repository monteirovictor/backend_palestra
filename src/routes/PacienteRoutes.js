const express = require('express');

const router = express.Router();

const PacienteController = require('../controller/PacienteController');


router.post('/',PacienteController.create);

module.exports = router;