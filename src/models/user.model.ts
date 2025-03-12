import mongoose from "mongoose"
import { signup } from "../types"
import { timeStamp } from "console"

const userSchema = new mongoose.Schema<signup>({
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true,
        unique:true
    },
    password : {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users",userSchema)

export default userModel