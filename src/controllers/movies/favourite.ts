import { Request, Response } from "express";
import favouriteModel from "../../models/favourites.model";

export const favouriteMovie = async (req:Request,res:Response) => {
    try {
       const {userId,movieId} = req.body
       if(!userId){
        throw new Error("user does not exist");
       } 
       if(!movieId){
        throw new Error("movie does not exist");
       }

       const fav = await favouriteModel.find({
        userId : userId,
        movieId : movieId
       })
       if(fav.length>0){
        const deleteFav = await favouriteModel.deleteMany({
        userId : userId,
        movieId : movieId
        })


        console.log(deleteFav)

        res.status(200).json({
            success:true,
            data:{
                deleteFav
            }
           })
       }else{
       const addFav = await favouriteModel.create({
        userId : userId,
        movieId : movieId
       })

       console.log(addFav)


       res.status(200).json({
        success:true,
        data:{
            addFav
        }
       })
       }

       

    } catch (error) {
        if(error){
            res.status(404).json({
                success:false,
                message:"an error occured",
                data:{
                    error
                },

            })
        }
    }
}

export const fetchFavouriteMovie = async (req:Request,res:Response) => {
    try {
       const userId = req.query.userId
       if(!userId){
        throw new Error("user does not exist");
       } 

       const favourites = await favouriteModel.find({
        userId : userId
       }) || [{}]

       res.status(200).json({
        success:true,
        data:{
            favourites
        }
       })

    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success:false,
                message:"an error occured",
                data:{
                    error
                },

            })
        }
    }
}