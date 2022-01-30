const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync('../todo/todo.proto', {});

const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo("localhost:40000", grpc.credentials.createInsecure());
grpc.credentials.createInsecure();

const item1 = {
    id: -1,
    text: 'Do laundry'
};

const item2 = {
    id: -1,
    text: 'Do the dishes'
}

client.create(item1, (error, response) => {
    console.log('Received from server: ', JSON.stringify(response), JSON.stringify(error));
    client.create(item2, (error, response) => {
        console.log('Received from server: ', JSON.stringify(response), JSON.stringify(error));

        client.list({}, (error, response) => {
            console.log('Received from server: ', JSON.stringify(response), JSON.stringify(error));
        }); 

    }); 
});

