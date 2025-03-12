import express from "express"
import addMovie from "../controllers/movies/addMovie"
const movieRoute = express.Router()

movieRoute.post("/add",addMovie)

export default movieRoute