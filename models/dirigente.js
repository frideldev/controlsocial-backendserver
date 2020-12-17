const {Schema, model} = require('mongoose');
const DirigenteSchema = Schema({
    
    ci:{
        type: Number,
        required:true
    },
    cargo: {
        type: String,
        required:true
    },
    role: {
        type: String,
        required:true
    },
    iniciogestion: {
        type: Date,
        required:true
    },
    fingestion: {
        type: Date,
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
    usuario: {
        type: Schema.Types.ObjectId,
        ref:'Usuario'
    },
    barrio: {
        type: Schema.Types.ObjectId,
        ref:'Barrio'
    }
});
module.exports = model('Dirigente',DirigenteSchema);