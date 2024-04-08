import bcrypt from "bcrypt";
import Patient from "../models/Patient.mjs";

export const getPatients = async (req, res) => {
  // TODO: Get all patients from DB
  try {
    const allPatients = await Patient.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).json({
      success: true,
      data: allPatients,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const registerPatient = async (req, res) => {
  // TODO: Add new patient to DB
  try {
    const {
      firs_name,
      last_name,
      dni,
      birthdate,
      gender,
      blood_type,
      direction,
      email,
      password,
      rol,
    } = req.body;
    const patient = await Patient.create({
      firs_name,
      last_name,
      dni,
      birthdate,
      gender,
      blood_type,
      direction,
      email,
      password: await bcrypt.hash(password, 10),
      rol,
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
  // TODO: Login patient
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
    res.status(200).json({
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
  // TODO: Get patient from DB
  try {
    const { id } = res.params;
    const patient = await Patient.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
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
export const deletePatient = (req, res) => {
  // TODO: Delete patient from DB
  try {
    const { id } = res.params;
    Patient.destroy({
      where: {
        id: id,
      },
    });
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

export const updatePatient = (req, res) => {
  // TODO: Update patient in DB
  try {
    const { id } = req.params;
    const {
      firs_name,
      last_name,
      dni,
      birthdate,
      gender,
      blood_type,
      direction,
      email,
      password,
      rol,
    } = req.body;
    Patient.update(
      {
        firs_name,
        last_name,
        dni,
        birthdate,
        gender,
        blood_type,
        direction,
        email,
        password,
        rol,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      success: true,
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
