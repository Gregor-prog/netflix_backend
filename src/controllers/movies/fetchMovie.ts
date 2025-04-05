import { Request, Response } from "express";
import movieModel from "../../models/movie.model";
export const getMovies = async (req:Request,res:Response) => {
    try {
        let movies;
        const id = req.query
        console.log(id)
        if(Object.keys(id).length == 0){
            movies = await movieModel.find({})
            if(movies.length == 0){
                throw new Error("couldn't fetch movies");
               }
               
               res.status(200).json({
                success:true,
                message: "movies fetched successfully",
                data:{
                    movies:movies
                }
               })
        }
        else{
            console.log(id.id)
            movies = await movieModel.find({"_id": id.id})
            if(movies.length == 0){
                throw new Error("couldn't fetch movies");
               }
               
               res.status(200).json({
                success:true,
                message: "movies fetched successfully",
                data:{
                    movies:movies
                }
               })
        }
       
    } catch (error) {
        if(error){
            res.status(404).json({
                success:false,
                message:"movies not found",
                data:{
                    error:error
                }
            })
        }
    }
}