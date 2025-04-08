"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    backdrop_path: {
        type: String
    },
    title: {
        type: String
    },
    overview: {
        type: String
    },
    poster_path: {
        type: String
    },
    original_language: {
        type: String
    },
    release_date: {
        type: String
    },
    video: {
        type: String
    },
    favourite: {
        type: Boolean
    },
    type: {
        type: String
    }
});
const movieModel = mongoose_1.default.model("movies", movieSchema);
exports.default = movieModel;
