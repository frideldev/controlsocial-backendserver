const Dirigente = require('../models/dirigente');
const getDirigentes = (req,res)=>{
    res.json({
        ok:true,
        dirigentes:[]
    });
};
const crearDirigente = async(req,res)=>{
    const {email,password,nombre} = req.body;
    const dirigente = Dirigente(req.body);
    await dirigente.save();
    res.json({
        ok:true,
        dirigente
    });
};
module.exports = {
getDirigentes,
crearDirigente
};