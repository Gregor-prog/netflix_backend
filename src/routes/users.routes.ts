import express from "express"
const userRoutes = express.Router()
import signup from "../controllers/users/signup"
import login from "../controllers/users/login"

userRoutes.post("/signup",signup)
userRoutes.post("/signin",login)


export default userRoutes