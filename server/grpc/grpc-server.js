import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { getAlluserData, createNew, getuserDataById, updateuserDataById, deletegetuserDataById } from '../repo/user_repo.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const protoPath = path.resolve(__dirname, './user.proto');


const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

var packageDefinition = protoLoader.loadSync(protoPath, options);
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const server = new grpc.Server();

const userService = {
    GetAllUsers: getAlluserData,
    CreateUser: createNew,
    GetUserById: getuserDataById,
    UpdateUserById: updateuserDataById,
    DeleteUserById: deletegetuserDataById,
};

server.addService(userProto.UserService.service, userService);

const port = 50051;
export function grpcServer() {
    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(`Server failed to bind: ${err.message}`);
        } else {
            console.log(`GRPC Server running at http://127.0.0.1:${port}`);
        }
    });
}