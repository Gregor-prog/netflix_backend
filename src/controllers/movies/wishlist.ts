import { Request, Response } from "express";
import wishListModel from "../../models/wishlists.model";
export const wishList = async (req:Request,res:Response) => {
    try {
        const {userId,movieId} = req.body
    const wish = await wishListModel.find({
        userId:userId,
        movieId:movieId
    })

    if(wish.length > 0){
        const deleteWish = wishListModel.deleteMany({
            userId:userId,
            movieId:movieId
        })
        console.log(deleteWish)
        res.status(200).json({
            success:true,
            message:"wish deleted successfully",
            data:{
                deleteWish
            }
        })
    }else{
        const createWish = await wishListModel.create({
            userId:userId,
            movieId:movieId
        })
        console.log(createWish)
        res.status(200).json({
            suucess:true,
            message:"wish created successfully",
            data:{
                createWish
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
                }
            })
        }
    }
}

export const fetchWish = async (req:Request,res:Response) => {
    const userId = req.query.userId
    try {
        let wishes:{}[] = await wishListModel.find({
            userId:userId
        }) 
        if(wishes.length == 0){
            wishes = [{}]
        }
        res.status(200).json({
            success:true,
            message:"wishes fetched successfully",
            data:{
                wishes
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
            }
        })
      }  
    }
}