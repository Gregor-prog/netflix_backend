import express from "express"
import userRoutes from "./routes/users.routes"
import mongoose from "mongoose"
import "dotenv/config"
import session from "express-session"
const app = express()


app.use(express.json())
 mongoose.connect(process.env.MONGO_STRING as string, {})
 .then((res) => console.log("mongoose is connected"))
 .catch((err) => console.error(err))

 app.use(
    session({
        secret:"dig",
        resave:false,
        saveUninitialized:false,
        cookie:{
            secure:false,
            httpOnly:true,
            maxAge: 1000 * 60 * 60 *3
        }
    })
 )

import userModel from "./models/user.model"
import movieModel from "./models/movie.model"
import favouriteModel from "./models/favourites.model"
import authUser from "./auth/authUser"
import movieRoute from "./routes/movie.routes"

app.use("/users", userRoutes)
app.use(authUser)
app.use("/movie", movieRoute)

app.listen(3000,() => {
    console.log("server running on port 3000")
})