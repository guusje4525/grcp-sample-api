"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todosControllers = require("../controllers/todos");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send(todosControllers.list());
});
router.post('/', function (req, res) {
    var item = todosControllers.create(req.body);
    console.log(item);
    res.send(item);
});
exports.default = router;
