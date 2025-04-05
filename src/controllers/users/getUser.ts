import { Request, Response } from "express"
import mongoose from "mongoose"
import userModel from "../../models/user.model"
export const getUSers = async (req:Request,res : Response) => {
    try {
       const users =  await userModel.find({})
       if(users == null || !users){
            throw new Error("couldn't fetch users");
       }
       else{
                res.status(200).json({
                    success:true,
                    message:"user data fetched successfully",
                    data:{
                    users
                    }
                })
       }
    } catch (error) {
             if(error){
                    res.status(500).json({
                        success:false,
                        message:"couldn't fetch user data",
                        error:{
                            error
                        }
                    })
        }
    }
}

export const getone = async (req:Request, res:Response) => {
    const {_id} = req.body
    try {
        const user = await userModel.findOne({_id:_id})
        if(user == null){
            throw new Error("couldn't find user");
        }

        res.status(200).json({
            success:true,
            message:"got user successfully",
            data:{
                data: user
            }
        })

    } catch (error) {
        if(error){
            res.status(404).json({
                success:false,
                message:"user not found",
                data:{
                    error: error
                }
            })
        }
    }
}