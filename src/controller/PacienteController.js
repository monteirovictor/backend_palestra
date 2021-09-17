const PacienteModel = require('../model/PacienteModel');

class PacienteController{

   

    // Inserção
    async create(req,res){

       const Paciente = new PacienteModel(req.body);
      
       await Paciente
            .save()
            .then(response=>{
                return res.status(200).json(response);
            })
            .catch(error=>{
                return res.status(500).json(error);
            });
    }


}

module.exports = new PacienteController();