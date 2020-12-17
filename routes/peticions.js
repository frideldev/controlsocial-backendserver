const {Router} = require('express');
const { crearPeticion,getPeticions } = require('../controllers/peticions');
const router = Router();
/**
 * @api {get} /api/convocatorias Lista General de Peticiones
 * @apiName GetPeticions
 * @apiGroup Peticions
 * @apiSuccess {String} descripcion Descripcion de la peticion.
 * @apiSuccess {String} categoria  Categoria segun obra publica de la peticion.
 * @apiSuccess {String} estado  Estado de ejecucion ( Aceptado, Rechazado, En Espera, En Tramite)
 * @apiSuccess {String} convocatoria-asunto  Asunto Convocatoria.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.get('/',getPeticions);
/**
 * @api {post} /api/usuarios Crear Usuarios
 * @apiName CrearPeticion
 * @apiGroup Peticions
 * @apiHeader {String} nombre Correo del Usuario.
 * @apiHeader {String} email  Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.
 * @apiHeader {String} password  Estado para saber si tiene o no cuenta de google.
 * @apiSuccess {Number} id  Id de Usuario.
 * @apiSuccess {Date} createat  Fecha de creacion del registro.
 * @apiSuccess {Date} updateat  Fecha de actualizacion del registro.
 * @apiSuccess {Boolean} enabled  Estado para que el registro este activo o borrado.
 * 
 */
router.post('/',crearPeticion);
module.exports = router;