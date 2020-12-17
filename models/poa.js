const {Schema, model} = require('mongoose');
const PoaSchema = Schema({
    item:{
        type: String,
        required:true
    },
    presupuesto: {
        type: Number,
        required:true
    },
    gestion: {
        type: Number,
        required:true
    },
    nombresupervisor: {
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
    barrio: {
        type: Schema.Types.ObjectId,
        ref:'Barrio'
    }
});
module.exports = model('Poa',PoaSchema);