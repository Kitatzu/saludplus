import express from "express";
const patientsRouter = express.Router();

patientsRouter.get("/", (req, res) => {
    // TODO: Get all patients from DB
    try {
        res.send("Get all patients");
    } catch (error) {
        
    }
});

patientsRouter.post("/register", (req, res) => {
    // TODO: Add new patient to DB
    try {
        
    } catch (error) {
        
    }
});

patientsRouter.get("/login" , (req, res) => {
    // TODO: Login patient
    try {
        
    } catch (error) {
        
    }
})

patientsRouter.get("/:id", (req, res) => {
    // TODO: Get patient from DB
});

patientsRouter.delete("/:id", (req, res) => {
    // TODO: Delete patient from DB
});

patientsRouter.put("/:id", (req, res) => {
    // TODO: Update patient in DB
});

patientsRouter.get("/:id/appointments", (req, res) => {
    // TODO: Get appointments from patient
});

patientsRouter.get("/:id/medical_examinations", (req, res) => {
    // TODO: Get medical examinations from patient
});

export default patientsRouter;