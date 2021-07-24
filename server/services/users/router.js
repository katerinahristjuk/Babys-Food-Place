const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();

router.get('/users', userController.getUsers); 
router.post('/register', userController.registerUser);
router.post('/login', userController.login);
router.get('/:userId', userController.showOneUser);
router.delete('/users/:userId', userController.deleteUser);
router.patch('/:userId', userController.updateUser);

module.exports = router;