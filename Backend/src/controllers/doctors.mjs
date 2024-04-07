import express from "express";
const doctorsRouter = express.Router();

doctorsRouter.get("/", (req, res) => {
    // TODO: Get all doctors from DB
    try {
        res.send("Get all doctors");
    } catch (error) {
        
    }
});

doctorsRouter.post("/register", (req, res) => {
    // TODO: Add new doctor to DB
    try {
        
    } catch (error) {
        
    }
})

doctorsRouter.get("/:id", (req, res) => {
    // TODO: Get doctor from DB
    try {
        
    } catch (error) {
        
    }
})

doctorsRouter.delete("/:id", (req, res) => {
    // TODO: Delete doctor from DB
    try {
        
    } catch (error) {
        
    }
})

doctorsRouter.put("/:id", (req, res) => {
    // TODO: Update doctor in DB
    try {
        
    } catch (error) {
        
    }
})

doctorsRouter.get("/:id/patients", (req, res) => {
    // TODO: Get patients from doctor
    try {
        
    } catch (error) {
        
    }
})

doctorsRouter.get("/:id/appointments", (req, res) => {
    // TODO: Get appointments from doctor
    try {
        
    } catch (error) {
        
    }
})

doctorsRouter.get("/:id/schedules", (req, res) => {
    // TODO: Get schedules from doctor
    try {
        
    } catch (error) {
        
    }
})



export default doctorsRouter;