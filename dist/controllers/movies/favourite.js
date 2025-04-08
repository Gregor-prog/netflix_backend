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
exports.fetchFavouriteMovie = exports.favouriteMovie = void 0;
const favourites_model_1 = __importDefault(require("../../models/favourites.model"));
const favouriteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.body;
        if (!userId) {
            throw new Error("user does not exist");
        }
        if (!movieId) {
            throw new Error("movie does not exist");
        }
        const fav = yield favourites_model_1.default.find({
            userId: userId,
            movieId: movieId
        });
        if (fav.length > 0) {
            const deleteFav = yield favourites_model_1.default.deleteMany({
                userId: userId,
                movieId: movieId
            });
            console.log(deleteFav);
            res.status(200).json({
                success: true,
                data: {
                    deleteFav
                }
            });
        }
        else {
            const addFav = yield favourites_model_1.default.create({
                userId: userId,
                movieId: movieId
            });
            console.log(addFav);
            res.status(200).json({
                success: true,
                data: {
                    addFav
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
                },
            });
        }
    }
});
exports.favouriteMovie = favouriteMovie;
const fetchFavouriteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.userId;
        if (!userId) {
            throw new Error("user does not exist");
        }
        const favourites = (yield favourites_model_1.default.find({
            userId: userId
        })) || [{}];
        res.status(200).json({
            success: true,
            data: {
                favourites
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
                },
            });
        }
    }
});
exports.fetchFavouriteMovie = fetchFavouriteMovie;
