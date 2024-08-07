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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUsers = exports.getUserById = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({
        msg: "getUsers",
        usuarios,
    });
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        res.json({
            usuario,
        });
    }
    else {
        res.status(404).json({
            msg: "usuario no existe",
        });
    }
});
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
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        res.json({
            usuario,
        });
    }
    // await usuario?.destroy();
    yield (usuario === null || usuario === void 0 ? void 0 : usuario.update({ estado: false }));
    res.json({
        msg: "getUsers",
        id,
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=usuarios.js.map