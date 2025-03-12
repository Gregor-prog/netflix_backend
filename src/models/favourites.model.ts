import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const favouriteModel = mongoose.model("favourites",favouriteSchema)
export default favouriteModel