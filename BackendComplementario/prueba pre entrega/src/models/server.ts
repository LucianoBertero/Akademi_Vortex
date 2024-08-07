import express, { Application } from "express";
import cors from "cors";
import AppDataSource from "../db/conecction";
import morgan from "morgan";
import authRoutes from "../routes/auth";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    auth: "/api/auth",
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.dbConection();
    this.middlewares();
    this.routes();
    console.log(process.env.USER, "dasdasd");
  }

  async dbConection() {
    try {
      await AppDataSource.initialize();
      console.log("Conectado a la base de datos");
    } catch (err) {
      console.error("Error al conectar a la base de datos:", err);
    }
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
