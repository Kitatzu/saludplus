import express from "express";
import cors from "cors";
import adminRoutes from "./src/routes/admins.routes.mjs";
import sequelize from "./src/database/startDb.mjs";

import './src/models/Admin.mjs'
import './src/models/Doctor.mjs'
import './src/models/Patient.mjs'
import './src/models/Medical_appointment.mjs'
import './src/models/MedicalSpeciality.mjs'
import './src/models/Availabity.mjs'

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

app.use(adminRoutes);

const PORT = 3001 || process.env.PORT;

sequelize
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
