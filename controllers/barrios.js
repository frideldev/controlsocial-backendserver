const Barrio = require('../models/barrio');
const getBarrios = (req,res)=>{
    res.json({
        ok:true,
        barrios:[]
    });
};
const crearBarrio = async(req,res)=>{
    const {email,password,nombre} = req.body;
    const barrio = Barrio(req.body);
    await barrio.save();
    res.json({
        ok:true,
        barrio
    });
};
module.exports = {
getBarrios,
crearBarrio
};