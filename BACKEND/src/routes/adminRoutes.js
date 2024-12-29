import express from "express";

import authAdmin from "../utils/authAdmin.js";

import adminController from "../controllers/AdminController.js";

const router = express.Router();

// Rota para administradores
router.get('/get-all', authAdmin, adminController.getAll);

export default router;