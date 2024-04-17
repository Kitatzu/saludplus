import { Router } from 'express'
import { getAllAvailability, createAvailability, updateAvailability, deleteAvailability, getAvailabilityById } from '../controllers/availabilitiesController.mjs'

const router = Router()

router
  .get('/availabilities', getAllAvailability)
  .post('/availabilities', createAvailability)
  .patch('/availabilities/:id', updateAvailability)
  .delete('/availabilities/:id', deleteAvailability)
  .get('/availabilities/:id', getAvailabilityById)

  export default router