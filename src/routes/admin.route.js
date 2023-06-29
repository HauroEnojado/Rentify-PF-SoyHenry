const { Router } = require('express')
const {
  getStatistics,
  getAdminsSudo,
  createAdmin,
  updateNameAdmin,
  updatePhoneAdmin,
  updateEmailAdmin,
  updateStatusAdmin,
  updateRoleAdmin,
  updateMembershipAdmin,
  updateImageAdmin
} = require('../controller/admins.controller.js')

const router = Router()
/**
 * @swagger
 * /admin/statistics:
 *   get:
 *     summary: Obtiene las estadísticas de la página
 *     description: Este endpoint devuelve las estadísticas de la página para diferentes categorías.
 *     tags:
 *       - Admins
 *     responses:
 *       200:
 *         description: Estadísticas obtenidas correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   description: Estadísticas de usuarios.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nombre de la categoría de usuarios.
 *                       total:
 *                         type: integer
 *                         description: Total de usuarios en esa categoría.
 *                 user-membership:
 *                   type: array
 *                   description: Estadísticas de membresía de usuarios.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nombre de la categoría de membresía de usuarios.
 *                       total:
 *                         type: integer
 *                         description: Total de usuarios en esa categoría de membresía.
 *                       active:
 *                         type: integer
 *                         description: Total de usuarios activos en esa categoría de membresía.
 *                       inactive:
 *                         type: integer
 *                         description: Total de usuarios inactivos en esa categoría de membresía.
 *                       banned:
 *                         type: integer
 *                         description: Total de usuarios baneados en esa categoría de membresía.
 *                 products:
 *                   type: array
 *                   description: Estadísticas de productos.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nombre de la categoría de productos.
 *                       total:
 *                         type: integer
 *                         description: Total de productos en esa categoría.
 *                 products-featured:
 *                   type: array
 *                   description: Estadísticas de productos destacados.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nombre de la categoría de productos destacados.
 *                       total:
 *                         type: integer
 *                         description: Total de productos en esa categoría de destacados.
 *                 orders:
 *                   type: array
 *                   description: Estadísticas de pedidos.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nombre de la categoría de pedidos.
 *                       total:
 *                         type: integer
 *                         description: Total de pedidos en esa categoría.
 *                 suscriptions:
 *                   type: array
 *                   description: Estadísticas de suscripciones.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nombre de la categoría de suscripciones.
 *                       total:
 *                         type: integer
 *                         description: Total de suscripciones en esa categoría.
 */

router.get('/statistics', getStatistics)
/**
 * @swagger
 * /admin/admins-sudo:
 *   get:
 *     summary: Obtén administradores y usuarios con permisos de superusuario
 *     description: Obtén una lista de usuarios filtrados por nombre y/o rol de administrador o superusuario
 *     tags:
 *       - Admins
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nombre de usuario
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: Filtro por rol de usuario (admin, sudo)
 *     responses:
 *       '200':
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '500':
 *         description: Error interno del servidor
 */

router.get('/admins-sudo', getAdminsSudo)

/**
 * @swagger
 * /admin/create-admin:
 *   post:
 *     summary: Crea un usuario administrador
 *     description: Este endpoint crea un nuevo usuario administrador. Los campos "image" y "phone" son opcionales.
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario administrador.
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario administrador.
 *                 required: true
 *               uid:
 *                 type: string
 *                 description: Identificador único del usuario administrador.
 *                 required: true
 *               image:
 *                 type: string
 *                 description: (Opcional) URL de la imagen del usuario administrador.
 *               phone:
 *                 type: string
 *                 description: (Opcional) Número de teléfono del usuario administrador.
 *     responses:
 *       201:
 *         description: Usuario administrador creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idUser:
 *                   type: string
 *                   description: ID del usuario administrador creado.
 *                 status:
 *                   type: string
 *                   description: Estado del usuario administrador.
 *                 name:
 *                   type: string
 *                   description: Nombre del usuario administrador.
 *                 email:
 *                   type: string
 *                   description: Correo electrónico del usuario administrador.
 *                 phone:
 *                   type: string
 *                   description: (Opcional) Número de teléfono del usuario administrador.
 *                 image:
 *                   type: string
 *                   description: (Opcional) URL de la imagen del usuario administrador.
 *                 uid:
 *                   type: string
 *                   description: Identificador único del usuario administrador.
 *                 membership:
 *                   type: string
 *                   description: Membresía del usuario administrador.
 *                 role:
 *                   type: string
 *                   description: Rol del usuario administrador.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de la última actualización del usuario administrador.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de creación del usuario administrador.
 */

router.post('/create-admin', createAdmin)

/**
 * @swagger
 * /admin/update-name:
 *   patch:
 *     summary: Actualiza el nombre del perfil de un administrador
 *     description: Puedes cambiar el nombre del perfil de un administrador
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 format: uuid
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: nombre de perfil actualizado exitosamente
 */

router.patch('/update-name', updateNameAdmin)

/**
 * @swagger
 * /admin/update-phone:
 *   patch:
 *     summary: Actualiza el número de teléfono de un administrador
 *     description: Puedes cambiar el número de teléfono de un administrador
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 format: uuid
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Número de teléfono actualizado exitosamente
 */

router.patch('/update-phone', updatePhoneAdmin)

/**
 * @swagger
 * /admin/update-email:
 *   patch:
 *     summary: Actualiza el email de un administrador
 *     description: Puedes cambiar el email de un administrador
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 format: uuid
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: email actualizado exitosamente
 */

router.patch('/update-email', updateEmailAdmin)

/**
 * @swagger
 * /admin/update-status:
 *   patch:
 *     summary: Actualiza el estado de un administrador
 *     description: Puedes cambiar el estado de un administrador
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 format: uuid
 *               status:
 *                 type: string
 *                 enum:
 *                   - active
 *                   - inactive
 *                   - banned
 *     responses:
 *       200:
 *         description: estado actualizado exitosamente
 */

router.patch('/update-status', updateStatusAdmin)

/**
 * @swagger
 * /admin/update-phone:
 *   patch:
 *     summary: Actualiza el Rol de un administrador
 *     description: Puedes cambiar el Rol de un administrador
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 format: uuid
 *               role:
 *                 type: string
 *                 enum:
 *                   - admin
 *                   - sudo
 *     responses:
 *       200:
 *         description: Rol actualizado exitosamente
 */

router.patch('/update-role', updateRoleAdmin)

/**
 * @swagger
 * /admin/update-membership:
 *   patch:
 *     summary: Actualiza la suscripcion de un administrador
 *     description: Puedes cambiar la suscripcion de un administrador
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 format: uuid
 *               membership:
 *                 type: string
 *                 enum:
 *                   - basic
 *                   - standard
 *                   - premium
 *     responses:
 *       200:
 *         description: suscripcion actualizado exitosamente
 */

router.patch('/update-membership', updateMembershipAdmin)

/**
 * @swagger
 * /admin/update-image:
 *   patch:
 *     summary: Actualiza el número de teléfono de un administrador
 *     description: Puedes cambiar el número de teléfono de un administrador
 *     tags:
 *       - Admins
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 format: uuid
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Número de teléfono de usuario actualizado exitosamente
 */

router.patch('/update-image', updateImageAdmin)

module.exports = router
