import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const wishListModel = mongoose.model("wishlist",wishListSchema)
export default wishListModel