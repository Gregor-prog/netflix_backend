import express, { NextFunction } from "express"
import { Request,Response } from "express"


const authUser = (req: Request,res: Response,next: NextFunction) => {
    if(!req.session.user){
        res.send({message:"timeout expired, login again"})
        res.redirect("/user/login")
    }
    next()
}

export default authUser