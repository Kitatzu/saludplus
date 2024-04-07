import { Sequelize } from "sequelize";
import admin from "./src/models/admin.mjs";

const config = {
  development: {
    dialect: "postgres",
    host: `${process.env.DB_HOST}`, // El punto de conexión de la base de datos
    database: `${process.env.DB_NAME}`, // El nombre de la base de datos
    username: `${process.env.DB_USER}`, // Tu nombre de usuario de la base de datos
    password: `${process.env.DB_PW}`, // Tu contraseña de la base de datos
    port: `${process.env.DB_PORT}`,
    logging: false,
  },
};

const sequelize = new Sequelize(config.development);

const Admin = admin(sequelize);

export default { sequelize, Admin };
