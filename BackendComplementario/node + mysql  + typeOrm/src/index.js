"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var user_routes_1 = require("./routes/user.routes");
require("reflect-metadata");
var db_conection_1 = require("./db/db.conection");
var app = (0, express_1.default)();
console.log("hola");
//midlewares
app.use(cors_1.default);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
//routes
app.use(user_routes_1.default);
app.get("/ping", function (req, res) {
    res.send("Pong!");
});
db_conection_1.AppDataSource.initialize()
    .then(function () {
    console.log("Conectado a la base de datos");
    app.listen(3000);
})
    .catch(function (error) {
    console.error("Error al conectar a la base de datos:", error);
});
