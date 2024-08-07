"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
require("reflect-metadata");
const db_conection_1 = require("./db/db.conection");
const app = (0, express_1.default)();
console.log("hola");
//midlewares
app.use(cors_1.default);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
//routes
app.use(user_routes_1.default);
app.get("/ping", (req, res) => {
    res.send("Pong!");
});
db_conection_1.AppDataSource.initialize()
    .then(() => {
    console.log("Conectado a la base de datos");
})
    .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto" + 3000);
});
