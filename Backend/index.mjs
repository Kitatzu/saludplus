import express from "express";
import cors from "cors";
import router from "./src/routes/indexRoutes.mjs";
import sequelize from "./src/database/startDb.mjs";
import { medicalSpecialitySeed } from "./src/database/seedSpeciality.mjs";
import { startModels } from "./src/database/startModels.mjs";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

app.use(router);

const port = process.env.PORT || 3001;

sequelize
  .sync({ alter: true }) // Utiliza { force: true } solo en desarrollo si quieres recrear tablas
  .then(() => {
    startModels();
    medicalSpecialitySeed();
    console.log("Base de datos sincronizada correctamente");
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
