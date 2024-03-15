import express from "express";
import { user_router } from "./user.js";


export const router = express.Router()

router.use('/user', user_router)