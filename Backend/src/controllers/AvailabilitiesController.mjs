import Availability from "../models/Availability.mjs";

export const getAllAvailability = async (req, res) => {
  try {
    const availability = await Availability.findAll();

    if (availability.length === 0) {
      return res.status(404).json({ message: "data availability not found" });
    }
    return res.json({
      data: availability,
      message: "Availability data successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAvailabilityById = async (req, res) => {
  try {
    const { idAvailability } = req.params;
    const availabilityId = await Availability.findOne(idAvailability);

    if (availabilityId === null)
      return res.status(400).json({ message: "Availability not found" });

    return res.json({
      data: availabilityId,
      message: "Availability data successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const createAvailability = async (req, res) => {
  try {
    const { date, start_time, end_time, idDoctor } = req.body;

    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);

    const bodyDate = new Date(date);
    bodyDate.setUTCHours(0, 0, 0, 0);

    if (currentDate > bodyDate) {
      return res.status(400).json({
        success: false,
        message: "The available date has already passed",
      });
    }

    // Convertir las horas de inicio y fin en objetos Date solo con la hora
    const startTime = new Date(`2000-01-01T${start_time}`);
    const endTime = new Date(`2000-01-01T${end_time}`);

    // Obtener la hora de las 8:00 y las 18:00
    const startHour = new Date(`2000-01-01T08:00`);
    const endHour = new Date(`2000-01-01T18:00`);

    // Verificar si las horas de inicio y fin están dentro del rango
    if (startTime < startHour || endTime > endHour) {
      return res.status(400).json({
        success: false,
        message: "Las horas deben estar entre las 8:00 y las 18:00",
      });
    }

    const newAvailability = await Availability.create({
      date,
      start_time,
      end_time,
      idDoctor,
    });

    res.status(200).json({
      success: true,
      message: "availability created successfully",
      data: newAvailability,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const updateAvailability = async (req, res) => {
//   try {
//     const idAvailability = req.params.id;
//     const { date, start_time, end_time, idDoctor } = req.body;

//     const availabilityById = await Availability.findByPk(idAvailability);
//     if (availabilityById === null)
//       return res.status(400).json({ message: "Availability not found" });

//     const availability = await Availability.update(
//       { date, start_time, end_time, idDoctor },
//       { where: { idAvailability } }
//     );
//     if (availability === null)
//       return res.status(400).json({ message: "Availability not found" });

//     return res.json({
//       message: "availability update successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const deleteAvailability = async (req, res) => {
//   try {
//     const idAvailability = req.params.id;
//     const availability = await Availability.findByPk(idAvailability);

//     if (availability === null)
//       return res.status(400).json({ message: "Availability not found" });

//     await availability.destroy();

//     res.json({
//       message: "Availability deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
