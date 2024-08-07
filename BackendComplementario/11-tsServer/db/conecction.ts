import { Sequelize } from "sequelize";

const db = new Sequelize("node-fernando", "root", "", {
  host: "localhost",
  dialect: "mysql",
  // logging
});

export default db;
