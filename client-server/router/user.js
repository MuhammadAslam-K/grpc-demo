import express from "express"
import { createNew, deleteUserDataById, getAllUserData, getUserDataById, updateUserDataById } from "../controller/user.js"

export const user_router = express.Router()

user_router.get('/', getAllUserData)

user_router.post('/', createNew)
user_router.get('/:id', getUserDataById)
user_router.put('/:id', updateUserDataById)
user_router.delete('/:id', deleteUserDataById)