"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function create(item) {
    var todos = JSON.parse(fs.readFileSync(__dirname + '/../../todos.json', 'utf8'));
    var todoItem = {
        id: todos.length + 1,
        text: item.text
    };
    todos.push(todoItem);
    fs.writeFileSync(__dirname + '/../../todos.json', JSON.stringify(todos));
    return todoItem;
}
exports.create = create;
function list() {
    var data = JSON.parse(fs.readFileSync(__dirname + '/../../todos.json', 'utf8'));
    return { items: data };
}
exports.list = list;
