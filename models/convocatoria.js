const {Schema, model} = require('mongoose');
const ConvocatoriaSchema = Schema({
    asunto:{
        type: String,
        required:true
    },
    acta:{
        type: String,
        required:true
    },
    lugar: {
        type: String,
        required:true
    },
    fecha: {
        type: Date,
        required:true
    },
    participantes: {
        type: Number,
        required:true
    },
    createat: {
        type: Date,
        default: Date.now
    },
    updateat: {
        type: Date,
        default: Date.now
    },
    enabled: {
        type: Boolean,
        default:true
    },
    dirigente: {
        type: Schema.Types.ObjectId,
        ref:'Dirigente'
    }
});
module.exports = model('Convocatoria',ConvocatoriaSchema);