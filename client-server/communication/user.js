import { client } from "../grpc/grpc-client.js"
import { callClientMethod } from "../utils/grpc-async.js";

const getAllUserData = async () => await callClientMethod(client, 'GetAllUsers', {})
const createNewUser = async (user) => await callClientMethod(client, 'CreateUser', user)
const getUserDataById = async (id) => await callClientMethod(client, 'GetUserById', { id })
const updateUserDataById = async ({ id, data }) => await callClientMethod(client, 'UpdateUserById', { id, data })
const deleteUserDataById = async (id) => await callClientMethod(client, "DeleteUserById", { id })


export const user_Communication = {
    getAllUserData,
    createNewUser,
    getUserDataById,
    updateUserDataById,
    deleteUserDataById,
}