const Seguimiento = require('../models/seguimiento');
const getSeguimientos = (req,res)=>{
    res.json({
        ok:true,
        seguimientos:[]
    });
};
const crearSeguimiento = async(req,res)=>{
    const {email,password,nombre} = req.body;
    const seguimiento = Seguimiento(req.body);
    await seguimiento.save();
    res.json({
        ok:true,
        seguimiento
    });
};
module.exports = {
getSeguimientos,
crearSeguimiento
};