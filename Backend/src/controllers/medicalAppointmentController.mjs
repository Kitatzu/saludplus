import MedicalAppointment from "../models/MedicalAppointment.mjs";
import Doctor from "../models/Doctor.mjs";

export const createMedicalAppointment = async (req, res) => {
  try {
    const { date, start_time, end_time, idDoctor, idPatient } = req.body;

    const doctor = await Doctor.findByPk(idDoctor, { include: "available" });

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor no encontrado",
      });
    }

    const isAvailable = doctor.available.some((availability) => {
      return (
        availability.dataValues.date === date &&
        start_time >= availability.dataValues.start_time &&
        availability.dataValues.end_time <= end_time
      );
    });

    if (!isAvailable) {
      return res.status(400).json({
        success: false,
        message: "El médico no está disponible en el horario especificado",
      });
    }

    const existingAppoiment = await MedicalAppointment.findOne({
      where: { start_time },
    });

    if (existingAppoiment) {
      return res.status(400).json({
        success: false,
        message: "There is already a medical appointment on that date and time",
      });
    }

    const newAppoiment = await MedicalAppointment.create({
      idDoctor,
      idPatient,
      date,
      start_time,
      end_time,
    });

    res.status(200).json({
      success: true,
      message: "Medical Appoiment taked correctly",
      data: newAppoiment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error create medical appointment",
    });
  }
};

export const getMedicalAppoiments = async (req, res) => {
  const { idPatient, idDoctor } = req.query;

  try {
    if (!idPatient && !idDoctor) {
      return res.status(400).json({
        success: false,
        message: "ID de paciente o doctor no proporcionado",
      });
    }

    if (idPatient) {
      const allAppoiment = await MedicalAppointment.findAll({
        where: { idPatient: idPatient },
      });

      if (!allAppoiment.length) {
        return res
          .status(404)
          .json({ message: "Appoiment not founded for patient" });
      }

      return res.status(200).json({ success: true, data: allAppoiment });
    } else if (idDoctor) {
      const allAppoiment = await MedicalAppointment.findAll({
        where: { idDoctor: idDoctor },
      });

      if (!allAppoiment.length) {
        return res
          .status(404)
          .json({ message: "Appoiment not founded for doctor" });
      }

      return res.status(200).json({ success: true, data: allAppoiment });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error get appoiment",
    });
  }
};

export const cancelAppoiment = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Appoiment id is empty",
      });
    }

    const findAppoiment = await MedicalAppointment.findByPk(id);

    if (!findAppoiment) {
      return res.status(404).json({
        success: false,
        message: "Appoiment not founded for id",
      });
    }

    if (findAppoiment.state === "canceled") {
      return res.status(400).json({
        success: false,
        message: "appoiment is alredy canceled",
      });
    }

    findAppoiment.state = "canceled";

    await findAppoiment.save();

    res.json({
      success: true,
      data: findAppoiment,
      message: "Appoiment canceled correctly",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error cancel appoiment",
    });
  }
};
