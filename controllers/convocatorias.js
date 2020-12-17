const Convocatoria = require('../models/convocatoria');
const getConvocatorias = (req,res)=>{
    res.json({
        ok:true,
        convocatorias:[]
    });
};
const crearConvocatoria = async(req,res)=>{
    const {email,password,nombre} = req.body;
    const convocatoria = Convocatoria(req.body);
    await convocatoria.save();
    res.json({
        ok:true,
        convocatoria
    });
};
module.exports = {
getConvocatorias,
crearConvocatoria
};