const {Router} = require('express');
const { getDirigentes,crearDirigente } = require('../controllers/dirigentes');
const router = Router();
/**
 * @api {get} /api/convocatorias Lista General de Dirigentes
 * @apiName GetDirigentes
 * @apiGroup Dirigentes
 * @apiSuccess {String} nombre Nombre del Dirigente.
 * @apiSuccess {Number} ci  Cedula de Identidad del Dirigente.
 * @apiSuccess {String} cargo  Cargo del Dirigente ( Cargo Interno).
 * @apiSuccess {String} role  Rol del Dirigente Dirigente Distrital, Dirigente Barrial o Dirigente Municipal.
 * @apiSuccess {String} iniciogestion  Inicio de Gestion del Dirigente.
 * @apiSuccess {String} fingestion  Fecha Fin de Gestion del Dirigente.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getDirigentes);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearDirigente
 * @apiGroup Dirigentes
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearDirigente);
module.exports = router;