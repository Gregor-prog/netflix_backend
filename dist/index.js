"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect(process.env.MONGO_STRING, {})
    .then((res) => console.log("mongoose is connected"))
    .catch((err) => console.error(err));
app.use((0, express_session_1.default)({
    secret: "dig",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 3
    }
}));
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
app.use("/users", users_routes_1.default);
// app.use(authUser)
app.use("/movie", movie_routes_1.default);
app.listen(4000, () => {
    console.log("server running on port 4000");
});
