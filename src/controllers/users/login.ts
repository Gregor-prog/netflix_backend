import { Request, Response } from "express";
import { login, signup } from "../../types";
import userModel from "../../models/user.model";
import bcrypt from "bcryptjs"

const login = async (req: Request<{}, {}, login, {}>,res : Response) => {
    const {email,password} = req.body

    try {
        const user = await userModel.findOne({email:email})
        console.log(user)
        if(!user){throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password.toString(),user.password)

        if(!checkPassword){
            throw new Error("invalid password");
        }

        req.session.user = user

        res.send({message:"login successful"})
        res.redirect("/user/home")

    } catch (error) {
            console.log(error)
            res.send({message: error})
    }
}

export default login