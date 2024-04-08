// import express from "express";
// import bcrypt from "bcrypt";
// import Doctor from "../models/Doctor.mjs";

// const doctorsRouter = express.Router();

// doctorsRouter.get("/", async (req, res) => {
//   // TODO: Get all doctors from DB
//   try {
//     const doctors = await Doctor.findAll({
//       attributes: {
//         exclude: ["password", "createdAt", "updatedAt"],
//       },
//     });
//     res.status(200).json({
//       success: true,
//       data: doctors,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// doctorsRouter.post("/register", async (req, res) => {
//   // TODO: Add new doctor to DB
//   try {
//     const { first_name, last_name, dni, registration, email, password } =
//       req.body;
//     const doctor = await Doctor.create({
//       first_name,
//       last_name,
//       dni,
//       registration,
//       email,
//       password: await bcrypt.hash(password, 10),
//     });
//     res.status(201).json({
//       success: true,
//       data: doctor,
//       message: "Doctor created successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//       message: "Error registering doctor",
//     });
//   }
// });

// doctorsRouter.get("/login", async (req, res) => {
//   // TODO: Login doctor
//   try {
//     const { email, password } = req.body;
//     const doctor = await Doctor.findOne({ where: { email } });
//     if (!doctor) {
//       return res.status(404).json({
//         success: false,
//         error: "Doctor not found",
//       });
//     }
//     const isMatch = await bcrypt.compare(password, doctor.password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         error: "Incorrect password",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: {
//         email: doctor.email,
//         first_name: doctor.first_name,
//         last_name: doctor.last_name,
//         dni: doctor.dni,
//         registration: doctor.registration,
//         rol: doctor.rol,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// doctorsRouter.get("/:id", async (req, res) => {
//   // TODO: Get doctor from DB
//   try {
//     const { id } = req.params;
//     const doctor = await Doctor.findByPk(id, {
//       attributes: {
//         exclude: ["password", "createdAt", "updatedAt"],
//       },
//     });
//     res.status(200).json({
//       success: true,
//       data: doctor,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// doctorsRouter.delete("/:id", (req, res) => {
//   // TODO: Delete doctor from DB
//   try {
//     const { id } = req.params;
//     Doctor.destroy({ where: { id } });
//     res.status(200).json({
//       success: true,
//       message: "Doctor deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// doctorsRouter.put("/:id", (req, res) => {
//   // TODO: Update doctor in DB
//   try {
//     const { id } = req.params;
//     const { first_name, last_name, dni, registration, email } = req.body;
//     Doctor.update(
//       {
//         first_name,
//         last_name,
//         dni,
//         registration,
//         email,
//       },
//       { where: { id } }
//     );
//     res.status(200).json({
//       success: true,
//       message: "Doctor updated successfully",
//     });
//   } catch (error) {}
// });

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

// export default doctorsRouter;
