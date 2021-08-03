const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.login);
router.get('/:userId/myProfile', userController.showOneUser);
router.patch('/:userId/myProfile', userController.updateUser);


module.exports = router;