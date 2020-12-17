const {Schema, model} = require('mongoose');
const SeguimientoSchema = Schema({
    descripcion:{
        type: String,
        required:true
    },
    fecha:{
        type: Date,
        required:true
    },
    categoria:{
        type: String,
        required:true
    },
    img: {
        type: String,
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
    poa: {
        type: Schema.Types.ObjectId,
        ref:'Poa'
    },
    dirigente: {
        type: Schema.Types.ObjectId,
        ref:'Dirigente'
    }
});
module.exports = model('Seguimiento',SeguimientoSchema);