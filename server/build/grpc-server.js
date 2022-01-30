"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import grpc
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
// Link proto to grpc
var packageDef = protoLoader.loadSync(__dirname + '/../todo.proto');
var todoProto = grpc.loadPackageDefinition(packageDef);
// Import our controllers
var todosControllers = require("./controllers/todos");
// Create universal wrapper
var wrapper = function (func) {
    return function (call, callback) { return callback(null, func(call.request)); };
};
var server = new grpc.Server();
server.addService(todoProto.todoPackage.Todo.service, {
    "create": wrapper(todosControllers.create),
    "list": wrapper(todosControllers.list)
});
server.bindAsync('0.0.0.0:40000', grpc.ServerCredentials.createInsecure(), function (error, port) {
    console.log('server is running on localhost:40000');
    server.start();
});
