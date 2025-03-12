import { Request, Response } from "express";
import movieModel from "../../models/movie.model";
import favouriteModel from "../../models/favourites.model";
const home = async (req : Request,res: Response) => {

    try {
        const user = req.session.user
        const movies = await movieModel.find()
        if(!movies){
            throw new Error("movie error");
        }
        res.send(movies)
    } catch (error) {
        if(error){
            res.send({message: "an error occured, couldnt fetch movie"})
            console.log(error)
        }

    }
}