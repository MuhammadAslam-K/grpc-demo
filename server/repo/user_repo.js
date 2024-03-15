import User from '../models/userModel.js'


export const getAlluserData = async (call, callback) => {
    const users = await User.find({})
    callback(null, { users });
};

export const createNew = async (call, callback) => {
    const user = await User.create(call.request)
    callback(null, user)
}

export const getuserDataById = async (call, callback) => {
    const { id } = call.request
    const user = await User.findById(id)
    callback(null, user)
}

export const updateuserDataById = async (call, callback) => {
    const { id, data } = call.request
    const updatedUser = await User.findByIdAndUpdate(id, { ...data }, { new: true })
    callback(null, updatedUser)
}

export const deletegetuserDataById = async (call, callback) => {
    const { id } = call.request
    const deletedUser = await User.findByIdAndDelete(id)
    callback(null, deletedUser)
}