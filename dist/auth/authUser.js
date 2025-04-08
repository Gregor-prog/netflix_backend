"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authUser = (req, res, next) => {
    if (!req.session.user) {
        res.send({ message: "timeout expired, login again" });
        res.redirect("/user/login");
    }
    next();
};
exports.default = authUser;
