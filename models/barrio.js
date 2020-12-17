const {Schema, model} = require('mongoose');
const BarrioSchema = Schema({
    nombre:{
        type: String,
        required:true
    },
    cantidadvecinos: {
        type: Number,
        required:true,
        unique:true
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
    distrito: {
        type: Schema.Types.ObjectId,
        ref:'Distrito'
    }
});
module.exports = model('Barrio',BarrioSchema);