import bcrypt from "bcrypt";
import Doctor from "../models/Doctor.mjs";
import MedicalSpeciality from "../models/MedicalSpeciality.mjs";

export const getDoctors = async (req, res) => {
  // TODO: Get all doctors from DB
  try {
    const doctors = await Doctor.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const registerDoctor = async (req, res) => {
  // TODO: Add new doctor to DB
  try {
    const {
      first_name,
      last_name,
      birthdate,
      dni,
      genre,
      registration,
      email,
      password,
      phone,
      rol,
      speciality,
    } = req.body;

    const findSpeciality = await MedicalSpeciality.findOne({
      where: { speciality: speciality },
    });

    if (!findSpeciality) {
      return res.status(404).json({
        success: false,
        message: "Medical Speciality not founded",
      });
    }

    const doctor = await Doctor.create({
      first_name,
      last_name,
      birthdate,
      dni,
      genre,
      registration,
      email,
      phone,
      rol,
      password: await bcrypt.hash(password, 10),
      idMedicalSpeciality: findSpeciality.idMedicalSpeciality,
    });
    res.status(201).json({
      success: true,
      data: doctor,
      message: "Doctor created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error registering doctor",
    });
  }
};

export const getDoctorById = async (req, res) => {
  // TODO: Get doctor from DB
  try {
    const { idDoctor } = req.params;
    const doctor = await Doctor.findOne(
      { where: idDoctor },
      {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      }
    );
    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  // TODO: Delete doctor from DB
  try {
    const { idDoctor } = req.params;
    const findDoctor = await Doctor.findOne({ where: idDoctor });

    await findDoctor.destroy();

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  // TODO: Update doctor in DB
  try {
    const { idDoctor } = req.params;
    const { first_name, last_name, dni, registration, email } = req.body;

    const findDoctor = await Doctor.findOne({ where: idDoctor });
    if (!findDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not founded",
      });
    }

    findDoctor.update({
      first_name,
      last_name,
      dni,
      registration,
      email,
    });
    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// doctorsRouter.get("/:id/patients", (req, res) => {
//   // TODO: Get patients from doctor
//   try {
//   } catch (error) {}
// });

// doctorsRouter.get("/:id/appointments", (req, res) => {
//   // TODO: Get appointments from doctor
//   try {
//   } catch (error) {}
// });

// doctorsRouter.get("/:id/schedules", (req, res) => {
//   // TODO: Get schedules from doctor
//   try {
//   } catch (error) {}
// });
