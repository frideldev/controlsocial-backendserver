const {Router} = require('express');
const { crearSeguimiento,getSeguimientos } = require('../controllers/seguimientos');
const router = Router();
/**
 * @api {get} /api/seguimientos Lista General de Seguimientos del POA
 * @apiName GetSeguimientos
 * @apiGroup Seguimientos
 * @apiSuccess {String} descripcion Descripcion del Proceso de Seguimiento del Item del POA.
 * @apiSuccess {Date} fecha  Fecha de realizacion del seguimiento.
 * @apiSuccess {String} categoria  Seleccion de categorias de obras publicas.
 * @apiSuccess {String} img  Imagen de respaldo de visita o accion de seguimiento.
 * @apiSuccess {String} poa-item   Item del POA a seguimiento.
 * @apiSuccess {String} poa-estado  Estado del POA a seguimiento.
 * @apiSuccess {String} dirigente-nombre  Nombre del Dirigente.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getSeguimientos);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearSeguimiento
 * @apiGroup Seguimientos
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearSeguimiento);
module.exports = router;
