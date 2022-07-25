const express = require('express');
const { verifyOwnership } = require('../middlewares/auth.js');
const router = express.Router();
const {verifyRole} = require('../middlewares/auth')

const {
  listUsers,
  updateUser,
  deleteUser
} = require('./../controllers/users.js');

//------------ ENDPOINTS ------------//
//Listar usuarios
router.get('/', listUsers);
//Actualizar un usuario

router.patch('/:id', verifyOwnership, updateUser);
//Eliminar un usuario
router.delete('/:id', verifyOwnership, deleteUser)


module.exports = router;
