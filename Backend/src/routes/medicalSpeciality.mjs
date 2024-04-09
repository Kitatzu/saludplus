import { Router } from 'express'

const router = Router()

router
  .get('/medical-speciality', getMedicalSpeciality)
  .post('/medical-speciality', createMedicalSpeciality)
  .patch('/medical-speciality/:id', updateMedicalSpeciality)
  .delete('/medical-speciality/:id', deleteMedicalSpeciality)
  .get('/medical-speciality/:id', getMedicalSpecialityById)

  export default router