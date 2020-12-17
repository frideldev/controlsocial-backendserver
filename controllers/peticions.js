const Peticion = require('../models/peticion');
const getPeticions = (req,res)=>{
    res.json({
        ok:true,
        peticions:[]
    });
};
const crearPeticion = async(req,res)=>{
    const {email,password,nombre} = req.body;
    const peticion = Peticion(req.body);
    await peticion.save();
    res.json({
        ok:true,
        peticion
    });
};
module.exports = {
getPeticions,
crearPeticion
};