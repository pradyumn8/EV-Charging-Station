import express from 'express';
import { create, getAll, getSingleUser, update, deleteUser } from '../Controller/userController.js';

const router = express.Router();

// User routes
router.post("/create", create); 
router.get("/getall", getAll); 
router.get("/getSingleUser/:id", getSingleUser); 
router.put("/update/:id",update);
router.delete("/delete/:id",deleteUser);


export default router;
