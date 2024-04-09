import MedicalSpeciality from "../models/MedicalSpeciality.mjs";

export const getMedicalSpeciality = async (req, res) => {
  try {
    const speciality = await MedicalSpeciality.findAll();
    res.status(200).json({
      success: true,
      data: speciality,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const createMedicalSpeciality = async (req, res) => {
  const { speciality, description } = req.body;

  try {
    const newSpeciality = await MedicalSpeciality.create({
      speciality,
      description,
    });
    res.status(201).json({
      success: true,
      data: newSpeciality,
      message: "Medical speciality created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error creating speciality",
    });
  }
};

export const updateMedicalSpeciality = async (req, res) => {
  const { idMedicalSpeciality } = req.params;
  const { speciality, description } = req.body;

  try {
    const findSpeciality = await MedicalSpeciality.findOne({
      where: idMedicalSpeciality,
    });

    if (!findSpeciality) {
      return res.status(404).json({
        success: false,
        message: "Medical speciality not founded",
      });
    }

    await findSpeciality.update({
      speciality,
      description,
    });

    res.status(201).json({
      success: true,
      data: findSpeciality,
      message: "Update medical speciality succes!!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error updated speciality",
    });
  }
};

export const deleteMedicalSpeciality = async (req, res) => {
  const { idMedicalSpeciality } = req.params;

  try {
    const speciality = await MedicalSpeciality.findOne({
      where: idMedicalSpeciality,
    });
    await speciality.destroy();

    res.status(201).json({
      success: true,
      message: "Speciality deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error deleted speciality",
    });
  }
};

export const getMedicalSpecialityById = async (req, res) => {
  const { idMedicalSpeciality } = req.params;

  try {
    const findSpeciality = await MedicalSpeciality.findOne({
      where: idMedicalSpeciality,
    });

    if (!findSpeciality) {
      return res.status(404).json({
        success: false,
        message: "Speciality not founded",
      });
    }

    res.status(201).json({
      success: true,
      data: findSpeciality,
      message: "Speciality founded successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error finded speciality",
    });
  }
};
