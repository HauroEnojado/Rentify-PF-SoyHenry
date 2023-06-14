const { User } = require("../db/db");
const { Sequelize } = require("sequelize");

// -- Obtener ususario por id (get userById)
// -- Crear nuevo usuario (post user)
// -- Actuliazar datos de usuario (put)
// -- Eliminar usuario (delete)
// -- Obtener usurio por memebresia (get)

// Crear nuevo usuario (POST /users)
const postUser = async (req, res) => {
    try {
        // Obtén los datos del cuerpo de la solicitud
        const { name, email, phone, image, membership, status } = req.body;

        // Crea un nuevo usuario en la base de datos
        const newUser = await User.create({
            name,
            email,
            phone,
            image,
            membership,
            status
        });

        // Envía la respuesta con el usuario creado
        res.status(201).json(newUser);
    } catch (error) {
        // En caso de error, envía una respuesta de error
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};
// Obtener usuario por ID (GET)
const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const userId = await User.findOne({
            where: {
                id: id,
            },
        })
        return res.status(200).json(userId);
    } catch (error) {
        res.status(400).json({ error: 'Error en la busqueda de users' });
    }
}

// // Actualizar datos de usuario (PUT)
// const putUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, email, phone, image, membership, status } = req.body;

//         const updatedUser = await User.update(
//             { name, email, phone, image, membership, status },
//             { where: { id } }
//         );

//         if (updatedUser[0] === 1) {
//             res.json({ message: 'Usuario actualizado correctamente' });
//         } else {
//             res.status(404).json({ error: 'Usuario no encontrado' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Error al actualizar el usuario' });
//     }
// }

// // Eliminar usuario (DELETE)
// const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const deletedUser = await User.destroy({ where: { id } });

//         if (deletedUser === 1) {
//             res.json({ message: 'Usuario eliminado correctamente' });
//         } else {
//             res.status(404).json({ error: 'Usuario no encontrado' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Error al eliminar el usuario' });
//     }
// }

// // Obtener usuarios por membresía (GET)
// const getUserMember = async (req, res) => {
//     try {
//         const { membership } = req.query;
//         const users = await User.findAll({ where: { membership } });

//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: 'Error al obtener los usuarios' });
//     }
// }


module.exports = { postUser, getUser,
//   putUser, deleteUser, getUserMember
     };