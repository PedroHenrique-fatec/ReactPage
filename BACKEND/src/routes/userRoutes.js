import express from 'express';
import userController from '../controllers/UserController.js';

const router = express.Router();

// Rotas de usuário
router.post('/register', userController.createUser);
router.post('/login', userController.validationLogin);
router.post('/logout', userController.logout);

export default router;
