import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const protoPath = path.resolve(__dirname, './user.proto');

const packageDefinition = protoLoader.loadSync(protoPath, {});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

export const client = new userProto.UserService('localhost:50051', grpc.credentials.createInsecure());
console.log('gRPC Client started successfully');