const {Router} = require('express');
const { getConvocatorias,crearConvocatoria } = require('../controllers/convocatorias');
const router = Router();
/**
 * @api {get} /api/convocatorias Lista General de Convocatorias
 * @apiName GetConvocatorias
 * @apiGroup Convocatorias
 * @apiSuccess {String} asunto Descripcion breve del motivo de la reunion.
 * @apiSuccess {String} acta  Imagen o Documento Digital del acta.
 * @apiSuccess {String} lugar  Lugar que se realizo la convocatoria.
 * @apiSuccess {String} fecha  Fecha que se realizo la convocatoria.
 * @apiSuccess {String} participantes  Numero de Participantes en la convocatoria.
 * @apiSuccess {String} dirigente-nombre  Nombre del Dirigente.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getConvocatorias);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearConvocatoria
 * @apiGroup Convocatorias
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearConvocatoria);
module.exports = router;