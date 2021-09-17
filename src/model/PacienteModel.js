const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PacienteSchema = new Schema({

    nome:{type:String,required:true},
    idade:{type:Number,required:true},
    imc:{type:Number,required:true},
    perc_gordura:{type:Number,required:true},
    massa_magra:{type:Number,required:true},
    massa_gorda:{type:Number,require:true},
    valor_consulta:{type:Number,required:true},
    when:{type:Date,required:true},
    created:{type:Date, default:Date.now()}
    

});

module.exports= mongoose.model('Paciente',PacienteSchema)