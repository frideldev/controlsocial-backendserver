const {Router} = require('express');
const { getUsuarios,crearUsuario } = require('../controllers/usuarios');
const router = Router();
/**
 * @api {get} /api/usuarios Lista General de Usuarios
 * @apiName GetUsuarios
 * @apiGroup Usuarios
 * @apiSuccess {String} email Correo del Usuario.
 * @apiSuccess {String} role  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiSuccess {Boolean} google  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getUsuarios);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearUsuario
 * @apiGroup Usuarios
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearUsuario);
module.exports = router;
