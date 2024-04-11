import MedicalSpeciality from "../models/MedicalSpeciality.mjs";
import sequelize from "./startDb.mjs";

export const medicalSpecialitySeed = async () => {
  try {
    const specialitiesList = [
      {
        speciality: "Cardiología",
        description:
          "Especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades del corazón y del aparato circulatorio.",
      },
      {
        speciality: "Clinico",
        description: "Especialidad médica que se ocupa de la medicina General",
      },
      {
        speciality: "Traumatologia",
        description:
          "Especialidad médica que se ocupa del diagnóstico y tratamiento de patologias relacionadas con el sistema esqueletico",
      },
    ];

    await MedicalSpeciality.sync();

    // Verifica si las especialidades ya existen en la base de datos
    for (const spec of specialitiesList) {
      const existingSpec = await MedicalSpeciality.findOne({
        where: { speciality: spec.speciality },
      });
      if (!existingSpec) {
        // Si la especialidad no existe, crea un nuevo registro
        await MedicalSpeciality.create(spec);
      }
    }

    console.log("Medical speciality add successfully");
  } catch (error) {
    console.log(error.message);
  }
};
