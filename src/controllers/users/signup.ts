import { Request, Response } from "express";
import { params, query, res, signup } from "../../types";
import mongoose from 'mongoose'
import userModel from "../../models/user.model";
import bcrypt from "bcryptjs"

const signup = async (req: Request<params,res,signup,query>,res:Response) => {
    console.log(req.body)
    const {name,email,password} = req.body
    try {
        if(!name){throw new Error("name not found")}
        if(!email){throw new Error("email not found")}
        if(!password){throw new Error("password not found")}

        const hashedPassword = await bcrypt.hash(password,10)

        const create = await userModel.create<signup>({
            name:name,
            email: email,
            password: hashedPassword
        })
        if(create){
        res.send({message: "user registered successfully"})
        }

    } catch (error) {
        if(error){
        res.send({message: "an error occured"})
        console.log(error)}
    }
}

export default signup