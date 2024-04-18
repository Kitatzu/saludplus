import Doctor from "../models/Doctor.mjs";
import Patient from "../models/Patient.mjs";
import Admin from "../models/Admin.mjs";
import bcrypt from "bcrypt";

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
    if (doctor) {
      usuario = doctor;
    } else if (patient) {
      usuario = patient;
    } else {
      usuario = admin;
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta." });
    }

    res
      .status(200)
      .json({ success: true, message: "Login successfully", data: usuario });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
