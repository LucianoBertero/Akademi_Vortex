import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes";

import "reflect-metadata";
import { AppDataSource } from "./db/db.conection";

const app = express();

console.log("hola");

//midlewares
app.use(cors);
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use(userRoutes);

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
app.listen(3000, () => {
  console.log("Servidor corriendo en puerto" + 3000);
});
