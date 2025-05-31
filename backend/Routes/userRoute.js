import express from 'express';
import { create, getAll, getSingleUser, update } from '../Controller/userController.js';

const router = express.Router();

// User routes
router.post("/create", create); 
router.get("/getall", getAll); 
router.get("/getSingleUser/:id", getSingleUser); 
route.get("/getSingleUser/:id",getSingleUser)
route.put("/update/:id",update)

export default router;
