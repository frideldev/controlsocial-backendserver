const {Schema, model} = require('mongoose');
const PeticionSchema = Schema({
    descripcion:{
        type: String,
        required:true
    },
    categoria: {
        type: String,
        required:true
    },
    estado: {
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
    convocatoria: {
        type: Schema.Types.ObjectId,
        ref:'Convocatoria'
    }
});
module.exports = model('Peticion',PeticionSchema);