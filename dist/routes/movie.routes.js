"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addMovie_1 = __importDefault(require("../controllers/movies/addMovie"));
const fetchMovie_1 = require("../controllers/movies/fetchMovie");
const favourite_1 = require("../controllers/movies/favourite");
const wishlist_1 = require("../controllers/movies/wishlist");
const movieRoute = express_1.default.Router();
movieRoute.post("/add", addMovie_1.default);
movieRoute.get("/fetchMovies", fetchMovie_1.getMovies);
movieRoute.post("/addFavourite", favourite_1.favouriteMovie);
movieRoute.get("/Favourite", favourite_1.fetchFavouriteMovie);
movieRoute.post("/adelWish", wishlist_1.wishList);
movieRoute.get("/fetchWishes", wishlist_1.fetchWish);
// query fetchWishes
exports.default = movieRoute;
