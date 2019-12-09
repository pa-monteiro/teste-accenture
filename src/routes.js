const express = require('express');
const router = express.Router();
const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/userController');
const AuthController = require('./controllers/authController');

router.post('/auth/sign-up', AuthController.signUp);
router.post('/auth/sign-in', AuthController.signIn);
router.get('/usuario', authMiddleware, UserController.show);

module.exports = router;