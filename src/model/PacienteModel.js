const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PacienteSchema = new Schema({

    nome:{type:String,required:true},
    idade:{type:Number,required:true}
    
    

});

module.exports= mongoose.model('Paciente',PacienteSchema)