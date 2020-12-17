define({ "api": [
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearBarrio",
    "group": "Barrios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/barrios.js",
    "groupTitle": "Barrios"
  },
  {
    "type": "get",
    "url": "/api/barrios",
    "title": "Lista General de Barrios",
    "name": "GetBarrios",
    "group": "Barrios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cantidadvecinos",
            "description": "<p>Cantidad de Vecinos en un Barrio.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "distrito",
            "description": "<p>Nombre del Distrito.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/barrios.js",
    "groupTitle": "Barrios"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearConvocatoria",
    "group": "Convocatorias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/convocatorias.js",
    "groupTitle": "Convocatorias"
  },
  {
    "type": "get",
    "url": "/api/convocatorias",
    "title": "Lista General de Convocatorias",
    "name": "GetConvocatorias",
    "group": "Convocatorias",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asunto",
            "description": "<p>Descripcion breve del motivo de la reunion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acta",
            "description": "<p>Imagen o Documento Digital del acta.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lugar",
            "description": "<p>Lugar que se realizo la convocatoria.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha que se realizo la convocatoria.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "participantes",
            "description": "<p>Numero de Participantes en la convocatoria.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dirigente-nombre",
            "description": "<p>Nombre del Dirigente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/convocatorias.js",
    "groupTitle": "Convocatorias"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearDirigente",
    "group": "Dirigentes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/dirigentes.js",
    "groupTitle": "Dirigentes"
  },
  {
    "type": "get",
    "url": "/api/convocatorias",
    "title": "Lista General de Dirigentes",
    "name": "GetDirigentes",
    "group": "Dirigentes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del Dirigente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Cedula de Identidad del Dirigente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cargo",
            "description": "<p>Cargo del Dirigente ( Cargo Interno).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Rol del Dirigente Dirigente Distrital, Dirigente Barrial o Dirigente Municipal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iniciogestion",
            "description": "<p>Inicio de Gestion del Dirigente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fingestion",
            "description": "<p>Fecha Fin de Gestion del Dirigente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/dirigentes.js",
    "groupTitle": "Dirigentes"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearDistrito",
    "group": "Distritos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/distritos.js",
    "groupTitle": "Distritos"
  },
  {
    "type": "get",
    "url": "/api/convocatorias",
    "title": "Lista General de Distritos",
    "name": "GetDistritos",
    "group": "Distritos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del Distrito.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "distrito-nombre",
            "description": "<p>Nombre del Municipio.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/distritos.js",
    "groupTitle": "Distritos"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearMunicipio",
    "group": "Municipios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/municipios.js",
    "groupTitle": "Municipios"
  },
  {
    "type": "get",
    "url": "/api/municipios",
    "title": "Lista General de Municipios",
    "name": "GetMunicipios",
    "group": "Municipios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del Municipio.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/municipios.js",
    "groupTitle": "Municipios"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearPeticion",
    "group": "Peticions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/peticions.js",
    "groupTitle": "Peticions"
  },
  {
    "type": "get",
    "url": "/api/convocatorias",
    "title": "Lista General de Peticiones",
    "name": "GetPeticions",
    "group": "Peticions",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripcion de la peticion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria segun obra publica de la peticion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado de ejecucion ( Aceptado, Rechazado, En Espera, En Tramite)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "convocatoria-asunto",
            "description": "<p>Asunto Convocatoria.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/peticions.js",
    "groupTitle": "Peticions"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearPoa",
    "group": "Poas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/poas.js",
    "groupTitle": "Poas"
  },
  {
    "type": "get",
    "url": "/api/poas",
    "title": "Lista General de Poas por Gestion",
    "name": "GetPoas",
    "group": "Poas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asunto",
            "description": "<p>Descripcion breve del motivo de la reunion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acta",
            "description": "<p>Imagen o Documento Digital del acta.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lugar",
            "description": "<p>Lugar que se realizo la convocatoria.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha que se realizo la convocatoria.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "participantes",
            "description": "<p>Numero de Participantes en la convocatoria.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dirigente-nombre",
            "description": "<p>Nombre del Dirigente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/poas.js",
    "groupTitle": "Poas"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearSeguimiento",
    "group": "Seguimientos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/seguimientos.js",
    "groupTitle": "Seguimientos"
  },
  {
    "type": "get",
    "url": "/api/seguimientos",
    "title": "Lista General de Seguimientos del POA",
    "name": "GetSeguimientos",
    "group": "Seguimientos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripcion del Proceso de Seguimiento del Item del POA.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha de realizacion del seguimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Seleccion de categorias de obras publicas.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>Imagen de respaldo de visita o accion de seguimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poa-item",
            "description": "<p>Item del POA a seguimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poa-estado",
            "description": "<p>Estado del POA a seguimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dirigente-nombre",
            "description": "<p>Nombre del Dirigente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/seguimientos.js",
    "groupTitle": "Seguimientos"
  },
  {
    "type": "post",
    "url": "/api/usuarios",
    "title": "Crear Usuarios",
    "name": "CrearUsuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/usuarios.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/api/usuarios",
    "title": "Lista General de Usuarios",
    "name": "GetUsuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo del Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Rol que sera DB_ROLE, DD_ROLE, DM_ROLE, ADM_ROLE.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "google",
            "description": "<p>Estado para saber si tiene o no cuenta de google.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createat",
            "description": "<p>Fecha de creacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updateat",
            "description": "<p>Fecha de actualizacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Estado para que el registro este activo o borrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/usuarios.js",
    "groupTitle": "Usuarios"
  }
] });
