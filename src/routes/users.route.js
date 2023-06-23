const { Router } = require('express')

const {
  postUser,
  getUser,
  getUsersByStatus,
  getAllUsers,
  getUserMember
  //   putUser, deleteUser, getUserMember
} = require('../controller/users.controller.js')

const router = Router()

// Swagger Schema
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         phone:
 *           type: string
 *         image:
 *           type: string
 *         membership:
 *           type: string
 *         status:
 *           type: string
 *       required:
 *         - name
 *         - email
 *         - phone
 *         - image
 *         - membership
 *         - status
 *       example:
 *         name: Gonzalo
 *         email: falso123@gmail.com
 *         phone: "123456"
 *         image: image.jpg
 *         membership: standard
 *         status: active
 */

// metodos get
router.get('/:id', getUser)
router.get ('/',getUsersByStatus)
// router.get('/ aca iria  qry  de esta manera en testeo /users?membership=standard'  ,getUserMember);

// metodos post

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario con la información proporcionada
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en los parámetros de entrada
 */
router.post('/', postUser)

// metodos put
// router.put('/:id',putUser);

// metodos delete
// router.delete('/:id', deleteUser);
module.exports = router
