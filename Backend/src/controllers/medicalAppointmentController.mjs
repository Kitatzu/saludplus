import MedicalAppointment from "../models/MedicalAppointment.mjs"

export const createMedicalAppointment = async (req, res) => {
  try {
    const {
      date,
      start_date,
      end_time,
      state,
      idDoctor,
      idPatient
    } = req.body;


    console.log(req.body)
    const patient = await MedicalAppointment.create({
      date,
      start_date,
      end_time,
      state,
      idDoctor,
      idPatient
    });

    console.log(patient)
    res.json({
      data: patient,
      message: "medical appointment created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error registering medical appointment",
    });
  }
};