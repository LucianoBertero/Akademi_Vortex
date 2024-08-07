// import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: "localhost",
//   port: parseInt(process.env.PORT_DATABASE || "3306"),
//   username: "root",
//   password: "",
//   database: "typeormdatabasetest",
//   entities: [User], // o "/src/entity/**/*.js"
//   synchronize: true,
//   //   logging: true,
// });

// export default AppDataSource;

export const mongoDbConection = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.pgul1v9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`;
console.log("Cadena de conexión MongoDB:", mongoDbConection);
