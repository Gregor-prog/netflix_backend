import { Request, Response } from "express";

const logout = (req: Request,res : Response) => {
    req.session.destroy((err) => {
        if(err){
            throw new Error("error logging out");
        }
    })
    res.send({message: "loogut success"})
    res.redirect("/user/login")
}

export default logout