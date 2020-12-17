const {Schema, model} = require('mongoose');
const MunicipioSchema = Schema({
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
    }
});
module.exports = model('Municipio',MunicipioSchema);