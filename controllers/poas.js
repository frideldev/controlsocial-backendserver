const Poa = require('../models/poa');
const getPoas = (req,res)=>{
    res.json({
        ok:true,
        poas:[]
    });
};
const crearPoa = async(req,res)=>{
    const {email,password,nombre} = req.body;
    const poa = Poa(req.body);
    await poa.save();
    res.json({
        ok:true,
        poa
    });
};
module.exports = {
getPoas,
crearPoa
};