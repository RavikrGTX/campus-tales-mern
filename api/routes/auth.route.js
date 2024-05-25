import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router=express.Router();

router.post('/signup',signup);
//ravi is a goodboy
export default router;