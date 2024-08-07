import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: parseInt(process.env.PORT_DATABASE || "3306"),
  username: "root",
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [], // o "/src/entity/**/*.js"
  synchronize: true,
  //   logging: true,
});

export default AppDataSource;
