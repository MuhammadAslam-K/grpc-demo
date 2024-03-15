import express from "express"
import { grpcServer } from "./grpc/grpc-server.js";
import { connect } from "./config/mongodb.js"

const app = express()
const port = 8001

connect()
grpcServer()
app.listen(port, () => console.log(`repo server running on port ${port}`));