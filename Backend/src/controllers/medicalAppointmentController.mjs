import MedicalAppointment from "../models/MedicalAppointment.mjs";

export const createMedicalAppointment = async (req, res) => {
  try {
    const { date, start_time, end_time, state, idDoctor, idPatient } = req.body

    const medicalAppointment = await MedicalAppointment.create({
      date,
      start_time,
      end_time,
      state,
      idDoctor,
      idPatient,
    });

    res.status(201).json({
      data: medicalAppointment,
      message: "medical appointment created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error create medical appointment",
    });
  }
};
