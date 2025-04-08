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
const movie_model_1 = __importDefault(require("../../models/movie.model"));
const addMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { backdrop_path, title, overview, poster_path, original_language, release_date, video, favourite, type } = req.body;
    try {
        yield movie_model_1.default.create({
            backdrop_path: req.body.backdrop_path,
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            original_language: req.body.original_language,
            release_date: req.body.release_date,
            video: req.body.video,
            favourite: req.body.favourite,
            type: req.body.type
        });
        res.send({ message: "movie added successfully" });
    }
    catch (error) {
        if (error) {
            console.log(error);
            res.send({ message: "an error occured, could'nt add movie" });
        }
    }
});
exports.default = addMovie;
