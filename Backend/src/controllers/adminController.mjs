import Doctor from "../models/Doctor.mjs";
import Patient from "../models/Patient.mjs";
import Admin from "../models/Admin.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../utilities/auth.mjs";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      return res.status(404).json({ message: "Email not sended" });
    }
    const patient = await Patient.findOne({ where: { email: email } });
    const doctor = await Doctor.findOne({ where: { email: email } });
    const admin = await Admin.findOne({ where: { email: email } });

    if (!patient && !doctor && !admin) {
      return res.status(404).json({ message: "email not founded" });
    }

    let usuario;
    let idField;
    if (doctor) {
      usuario = doctor;
      idField = usuario.idDoctor;
    } else if (patient) {
      usuario = patient;
      idField = usuario.idPatient;
    } else {
      usuario = admin;
      idField = usuario.idAdmin;
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta." });
    }

    const token = generateToken({ id: idField, data: usuario.rol });

    res
      .status(200)
      .json({ success: true, message: "Login successfully", data: token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error", data: error });
  }
};
