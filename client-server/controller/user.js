import { user_Communication } from "../communication/user.js"
import { catchAsync } from "../utils/catch-async.js"


export const getAllUserData = catchAsync(async (req, res) => {
    const response = await user_Communication.getAllUserData()
    res.json({ data: response })
})

export const createNew = catchAsync(async (req, res) => {
    const data = req.body
    const response = await user_Communication.createNewUser(data)
    res.json({ data: response })
})

export const getUserDataById = catchAsync(async (req, res) => {
    const id = req.params.id
    const user = await user_Communication.getUserDataById(id)
    res.json({ data: user })
})

export const updateUserDataById = catchAsync(async (req, res) => {
    const id = req.params.id
    const data = req.body
    const updatedUser = await user_Communication.updateUserDataById({ id, data })
    res.json({ data: updatedUser })
})

export const deleteUserDataById = (async (req, res) => {
    const id = req.params.id
    const deletedUser = await user_Communication.deleteUserDataById(id)
    res.json({ data: deletedUser })
})