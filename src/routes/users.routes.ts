import express from "express"
const userRoutes = express.Router()
import signup from "../controllers/users/signup"
import login from "../controllers/users/login"
import { getone, getUSers } from "../controllers/users/getUser"

userRoutes.post("/signup",signup)
userRoutes.post("/signin",login)
userRoutes.get("/getUsers",getUSers)
userRoutes.post("/User",getone)


export default userRoutes