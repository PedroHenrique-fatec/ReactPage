import express from 'express';
import reservationController from '../controllers/ReservationController.js';

const router = express.Router();

router.post('/create-reservation', reservationController.createReservation)


export default router;