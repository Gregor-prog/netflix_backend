import { NextFunction, Request, Response } from "express";
import { movie } from "../../types";
import movieModel from "../../models/movie.model";
import mongoose from "mongoose";

const addMovie = async (req: Request<{},{},movie,{}>,res: Response,next: NextFunction) => {
    const {backdrop_path,title,overview,poster_path,original_language,release_date,video,favourite,type} = req.body

    try {
        await movieModel.create<movie>({
            backdrop_path:req.body.backdrop_path,
            title:req.body.title,
            overview:req.body.overview,
            poster_path:req.body.poster_path,
            original_language:req.body.original_language,
            release_date:req.body.release_date,
            video:req.body.video,
            favourite:req.body.favourite,
            type:req.body.type
        })

        res.send({message: "movie added successfully"})
    } catch (error) {
        if(error){
            console.log(error)
            res.send({message: "an error occured, could'nt add movie"})
        }
    }
}

export default addMovie