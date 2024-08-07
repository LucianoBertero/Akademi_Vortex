"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const db_conection_1 = require("../db/db.conection");
const User_1 = require("../entity/User");
const userRepository = db_conection_1.AppDataSource.getRepository(User_1.User);
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("entro");
    const users = yield userRepository.find();
    res.json({ users });
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield userRepository.findOneBy({ id: parseInt(id) });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.create(req.body);
    const results = yield userRepository.save(user);
    return res.json({ user: results });
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield userRepository.findOneBy({ id: parseInt(id) });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    yield userRepository.update(id, req.body);
    return res.json({ message: "User updated" });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield userRepository.findOneBy({ id: parseInt(id) });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    yield userRepository.delete(id);
    return res.json({ message: "User deleted" });
});
exports.deleteUser = deleteUser;
