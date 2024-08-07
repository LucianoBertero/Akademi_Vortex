import { DataSource } from "typeorm";
import { Photo } from "../entities/photo";
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "typeormdatabasetest",
  entities: [Photo], // o "/src/entity/**/*.js"
  synchronize: true,
  //   logging: true,
});
