"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        if (!name) {
            throw new Error("name not found");
        }
        if (!email) {
            throw new Error("email not found");
        }
        if (!password) {
            throw new Error("password not found");
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const create = yield user_model_1.default.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        if (create) {
            res.send({ message: "user registered successfully" });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "an error occured" });
            console.log(error);
        }
    }
});
exports.default = signup;
