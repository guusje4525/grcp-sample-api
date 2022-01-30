
// Import grpc
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// Link proto to grpc
const packageDef = protoLoader.loadSync(__dirname + '/../todo.proto');
const todoProto = grpc.loadPackageDefinition(packageDef);

// Import our controllers
import * as todosControllers from './controllers/todos';

// Create universal wrapper
const wrapper = (func: any) => {
    return (call: any, callback: any) => callback(null, func(call.request))
}

const server = new grpc.Server();
server.addService(todoProto.todoPackage.Todo.service, {
    "create": wrapper(todosControllers.create),
    "list": wrapper(todosControllers.list)
});
server.bindAsync('0.0.0.0:40000', grpc.ServerCredentials.createInsecure(), (error, port) => {
    console.log('server is running on localhost:40000');
    server.start();
});

