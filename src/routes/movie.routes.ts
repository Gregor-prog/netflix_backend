import express from "express"
import addMovie from "../controllers/movies/addMovie"
import { getMovies } from "../controllers/movies/fetchMovie"
import { favouriteMovie, fetchFavouriteMovie } from "../controllers/movies/favourite"
import { fetchWish, wishList } from "../controllers/movies/wishlist"
const movieRoute = express.Router()

movieRoute.post("/add",addMovie)
movieRoute.get("/fetchMovies",getMovies)
movieRoute.post("/addFavourite",favouriteMovie)
movieRoute.get("/Favourite",fetchFavouriteMovie)
movieRoute.post("/adelWish", wishList)
movieRoute.get("/fetchWishes", fetchWish)
// query fetchWishes

export default movieRoute