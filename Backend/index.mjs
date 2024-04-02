import express from "express";
import cors from "cors";
import router from "./src/routes/router.mjs";
import db from "./startDb.mjs";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

const PORT = 3001 || process.env.PORT;

app.use(router);

db.sequelize
  .sync({ alter: true }) // Utiliza { force: true } solo en desarrollo si quieres recrear tablas
  .then(() => {
    console.log("Base de datos sincronizada correctamente");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
