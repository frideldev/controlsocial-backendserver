const Distrito = require('../models/distrito');
const getDistritos = (req,res)=>{
    res.json({
        ok:true,
        distritos:[]
    });
};
const crearDistrito = async(req,res)=>{
    const {email,password,nombre} = req.body;
    const distrito = Distrito(req.body);
    await distrito.save();
    res.json({
        ok:true,
        distrito
    });
};
module.exports = {
getDistritos,
crearDistrito
};