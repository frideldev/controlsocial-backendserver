const {Router} = require('express');
const { getBarrios,crearBarrio } = require('../controllers/barrios');
const router = Router();
/**
 * @api {get} /api/barrios Lista General de Barrios
 * @apiName GetBarrios
 * @apiGroup Barrios
 * @apiSuccess {String} nombre Correo del Usuario.
 * @apiSuccess {Number} cantidadvecinos  Cantidad de Vecinos en un Barrio.
 * @apiSuccess {String} distrito  Nombre del Distrito.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getBarrios);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearBarrio
 * @apiGroup  Barrios
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearBarrio);
module.exports = router;