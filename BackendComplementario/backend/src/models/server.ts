import express, { Application } from "express";
import cors from "cors";
// import AppDataSource, { mongoDbConection } from "../db/conection";
import morgan from "morgan";
import authRoutes from "../routes/auth";
import mongoose from "mongoose";
import { mongoDbConection } from "../db/conection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    auth: "/auth",
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.dbConection();
    this.middlewares();
    this.routes();
  }

  async dbConection() {
    mongoose
      .connect(mongoDbConection)
      .then(() => {
        console.log("Conectado a la base de datos");
      })
      .catch((err) => console.log(err));

    // await AppDataSource.initialize();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto" + this.port);
    });
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.auth, authRoutes);
  }
}

export default Server;
