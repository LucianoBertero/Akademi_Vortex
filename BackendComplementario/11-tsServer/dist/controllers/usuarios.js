"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUsers = exports.getUserById = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: "getUsers",
    });
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUsers",
        id,
    });
};
exports.getUserById = getUserById;
const postUsers = (req, res) => {
    const { body } = req;
    console.log(body);
    res.json({
        msg: "postUser",
        body,
    });
};
exports.postUsers = postUsers;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "getUsers",
        body,
        id,
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUsers",
        id,
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=usuarios.js.map