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
exports.getMovies = void 0;
const movie_model_1 = __importDefault(require("../../models/movie.model"));
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let movies;
        const id = req.query;
        console.log(id);
        if (Object.keys(id).length == 0) {
            movies = yield movie_model_1.default.find({});
            if (movies.length == 0) {
                throw new Error("couldn't fetch movies");
            }
            res.status(200).json({
                success: true,
                message: "movies fetched successfully",
                data: {
                    movies: movies
                }
            });
        }
        else {
            console.log(id.id);
            movies = yield movie_model_1.default.find({ "_id": id.id });
            if (movies.length == 0) {
                throw new Error("couldn't fetch movies");
            }
            res.status(200).json({
                success: true,
                message: "movies fetched successfully",
                data: {
                    movies: movies
                }
            });
        }
    }
    catch (error) {
        if (error) {
            res.status(404).json({
                success: false,
                message: "movies not found",
                data: {
                    error: error
                }
            });
        }
    }
});
exports.getMovies = getMovies;
