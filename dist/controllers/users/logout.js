"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            throw new Error("error logging out");
        }
    });
    res.send({ message: "loogut success" });
    res.redirect("/user/login");
};
exports.default = logout;
