import bcrypt from "bcrypt";
import Patient from "../models/Patient.mjs";

export const getPatients = async (req, res) => {
  try {
    const allPatients = await Patient.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.json({
      success: true,
      data: allPatients,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const registerPatient = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      dni,
      birthdate,
      genre,
      blood_type,
      email,
      password,
      phone,
    } = req.body;

    const patient = await Patient.create({
      first_name,
      last_name,
      dni,
      birthdate,
      genre,
      blood_type,
      email,
      password: await bcrypt.hash(password, 10),
      phone,
    });
    res.status(200).json({
      success: true,
      data: patient,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error registering patient",
    });
  }
};

export const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;
    const patient = await Patient.findOne({
      where: {
        email: email,
      },
    });
    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid password",
      });
    }
    res.json({
      success: true,
      data: patient,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error logging user",
    });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const { idPatient } = req.params;
    const patient = await Patient.findOne(
      { where: { idPatient: idPatient } },
      {
        attributes: {
          exclude: ["password"],
        },
      }
    );
    res.status(200).json({
      success: true,
      data: patient,
      message: "Patient retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error getting patient",
    });
  }
};
export const deletePatient = async (req, res) => {
  // TODO: Delete patient from DB
  try {
    const { idPatient } = req.params;

    const findPatient = await Patient.findOne({ where: idPatient });

    findPatient.destroy();

    res.status(200).json({
      success: true,
      message: "Patient deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error deleting patient",
    });
  }
};

export const updatePatient = async (req, res) => {
  // TODO: Update patient in DB
  try {
    const { idPatient } = req.params;

    const {
      first_name,
      last_name,
      dni,
      birthdate,
      gender,
      blood_type,
      direction,
      email,
      password,
    } = req.body;

    const findPatient = await Patient.findOne({ where: idPatient });

    await findPatient.update({
      first_name,
      last_name,
      dni,
      birthdate,
      gender,
      blood_type,
      direction,
      email,
      password,
    });
    res.status(200).json({
      success: true,
      data: findPatient,
      message: "Patient updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error updating patient",
    });
  }
};

// patientsRouter.get("/:id/appointments", (req, res) => {
//   // TODO: Get appointments from patient
// });

// patientsRouter.get("/:id/medical_examinations", (req, res) => {
//   // TODO: Get medical examinations from patient
// });
