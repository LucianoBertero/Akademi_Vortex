import { DataSource } from "typeorm";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "typeormdatabasetest",
  entities: [User], // o "/src/entity/**/*.js"
  synchronize: true,
  //   logging: true,
});
