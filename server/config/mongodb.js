import mongoose from "mongoose"


export async function connect() {
    try {

        await mongoose.connect('mongodb://localhost:27017/grpc')
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log(error);
        console.log("cannot connect");
    }
}