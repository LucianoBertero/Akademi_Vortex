import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/conecction";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.dbConecction();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //LECTURA BODY
    this.app.use(express.json());
    //Carpeta PUBLICA (sirve para contener contenido estatico)
    this.app.use(express.static("public"));
  }
  async dbConecction() {
    try {
      await db.authenticate;
      console.log("database online");
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto" + this.port);
    });
  }
}

export default Server;
