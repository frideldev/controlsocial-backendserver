const {Schema, model} = require('mongoose');
const DistritoSchema = Schema({
    nombre:{
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
    municipio: {
        type: Schema.Types.ObjectId,
        ref:'Municipio'
    }
});
module.exports = model('Distrito',DistritoSchema);