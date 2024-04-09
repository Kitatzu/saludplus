import { Router } from 'express'
import { getAvailabilities, createAvailabilities, updateAvailabilities, deleteAvailabilities, getAvailabilitiesById } from '../controllers/AvailabilitiesController.mjs'

const router = Router()

router
  .get('/Availabilities', getAvailabilities)
  .post('/Availabilities', createAvailabilities)
  .patch('/Availabilities/:id', updateAvailabilities)
  .delete('/Availabilities/:id', deleteAvailabilities)
  .get('/Availabilities/:id', getAvailabilitiesById)

  export default router