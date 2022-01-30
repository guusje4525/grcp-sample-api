"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = __importDefault(require("./todos"));
var baseRouter = express_1.Router();
baseRouter.use('/todos', todos_1.default);
exports.default = baseRouter;
