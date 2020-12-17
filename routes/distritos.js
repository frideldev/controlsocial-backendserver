const {Router} = require('express');
const { crearDistrito,getDistritos } = require('../controllers/distritos');
const router = Router();
/**
 * @api {get} /api/convocatorias Lista General de Distritos
 * @apiName GetDistritos
 * @apiGroup Distritos
 * @apiSuccess {String} nombre Nombre del Distrito.
 * @apiSuccess {String} distrito-nombre  Nombre del Municipio.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getDistritos);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearDistrito
 * @apiGroup Distritos
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearDistrito);
module.exports = router;