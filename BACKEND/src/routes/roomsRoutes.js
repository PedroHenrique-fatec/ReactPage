import express from 'express';
import roomController from '../controllers/RoomController.js';

import authUser from '../utils/authUser.js'; // Importando o authUser para verificar se o usuário está logado ou não.

const router = express.Router();

router.get('/get-room', authUser, roomController.getRooms);

router.post('/create-room', authUser, roomController.createRoom);

export default router;