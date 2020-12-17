const Municipio = require('../models/municipio');
const getMunicipios = async(req,res)=>{
    const municipios = await Municipio.find({},'nombre createat updateat enabled');
    res.json({
        ok:true,
        municipios
    });
};
const crearMunicipio = async(req,res)=>{
    const {nombre} = req.body;
    const municipio = Municipio(req.body);
    await municipio.save();
    res.json({
        ok:true,
        municipio
    });
};
module.exports = {
getMunicipios,
crearMunicipio
};