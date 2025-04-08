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
exports.fetchWish = exports.wishList = void 0;
const wishlists_model_1 = __importDefault(require("../../models/wishlists.model"));
const wishList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.body;
        const wish = yield wishlists_model_1.default.find({
            userId: userId,
            movieId: movieId
        });
        if (wish.length > 0) {
            const deleteWish = wishlists_model_1.default.deleteMany({
                userId: userId,
                movieId: movieId
            });
            console.log(deleteWish);
            res.status(200).json({
                success: true,
                message: "wish deleted successfully",
                data: {
                    deleteWish
                }
            });
        }
        else {
            const createWish = yield wishlists_model_1.default.create({
                userId: userId,
                movieId: movieId
            });
            console.log(createWish);
            res.status(200).json({
                suucess: true,
                message: "wish created successfully",
                data: {
                    createWish
                }
            });
        }
    }
    catch (error) {
        if (error) {
            res.status(404).json({
                success: false,
                message: "an error occured",
                data: {
                    error
                }
            });
        }
    }
});
exports.wishList = wishList;
const fetchWish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.userId;
    try {
        let wishes = yield wishlists_model_1.default.find({
            userId: userId
        });
        if (wishes.length == 0) {
            wishes = [{}];
        }
        res.status(200).json({
            success: true,
            message: "wishes fetched successfully",
            data: {
                wishes
            }
        });
    }
    catch (error) {
        if (error) {
            console.log(error);
            res.status(404).json({
                success: false,
                message: "an error occured",
                data: {
                    error
                }
            });
        }
    }
});
exports.fetchWish = fetchWish;
