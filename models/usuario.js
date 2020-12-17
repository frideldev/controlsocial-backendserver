const {Schema, model} = require('mongoose');
const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required:true,
        default: 'DB_ROLE'
    },
    google: {
        type: Boolean,
        default:false
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
module.exports = model('Usuario',UsuarioSchema);