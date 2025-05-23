"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const favouriteSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    movieId: {
        type: mongoose_1.default.Schema.Types.ObjectId
    }
});
const favouriteModel = mongoose_1.default.model("favourites", favouriteSchema);
exports.default = favouriteModel;
