"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes = express_1.default.Router();
const signup_1 = __importDefault(require("../controllers/users/signup"));
const login_1 = __importDefault(require("../controllers/users/login"));
const getUser_1 = require("../controllers/users/getUser");
userRoutes.post("/signup", signup_1.default);
userRoutes.post("/signin", login_1.default);
userRoutes.get("/getUsers", getUser_1.getUSers);
userRoutes.post("/User", getUser_1.getone);
exports.default = userRoutes;
