const {Router} = require('express');
const { crearMunicipio,getMunicipios } = require('../controllers/municipios');
const router = Router();
/**
 * @api {get} /api/municipios Lista General de Municipios
 * @apiName GetMunicipios
 * @apiGroup Municipios
 * @apiSuccess {String} nombre Nombre del Municipio.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getMunicipios);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearMunicipio
 * @apiGroup Municipios
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearMunicipio);
module.exports = router;