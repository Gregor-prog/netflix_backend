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
exports.getone = exports.getUSers = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const getUSers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find({});
        if (users == null || !users) {
            throw new Error("couldn't fetch users");
        }
        else {
            res.status(200).json({
                success: true,
                message: "user data fetched successfully",
                data: {
                    users
                }
            });
        }
    }
    catch (error) {
        if (error) {
            res.status(500).json({
                success: false,
                message: "couldn't fetch user data",
                error: {
                    error
                }
            });
        }
    }
});
exports.getUSers = getUSers;
const getone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    try {
        const user = yield user_model_1.default.findOne({ _id: _id });
        if (user == null) {
            throw new Error("couldn't find user");
        }
        res.status(200).json({
            success: true,
            message: "got user successfully",
            data: {
                data: user
            }
        });
    }
    catch (error) {
        if (error) {
            res.status(404).json({
                success: false,
                message: "user not found",
                data: {
                    error: error
                }
            });
        }
    }
});
exports.getone = getone;
