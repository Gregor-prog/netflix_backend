import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    backdrop_path : {
        type: String
    },
    title : {
        type : String
    },
    overview : {
        type : String
    },
    poster_path : {
        type: String
    },
    original_language : {
        type : String
    },
    release_date: {
        type:String
    },
    video :{
        type: String
    },
    favourite : {
        type : Boolean
    },
    type : {
        type: String
    }
})

const movieModel = mongoose.model("movies",movieSchema)
export default movieModel