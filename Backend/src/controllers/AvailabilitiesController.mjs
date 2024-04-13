import Availability from "../models/Availability.mjs"
import bcrypt from 'bcrypt'
import Doctor from "../models/Doctor.mjs"

export const getAvailabilities = async (req, res) => {
  try {
    const Availabilities = await Availability.findAll({
      include: [{
        model: Doctor,
        as: 'doctors'
      }]
    })

    if (Availabilities.length === 0) {
      return res.status(404).json({ message: 'data not found' })
    }
    return res.json({
      data: Availabilities,
      message: 'Availability data successfully'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
export const getAvailabilitiesById = async (req, res) => {
try {
  console.log(req.params)
  const { id } = req.params
  const AvailabilityId = await Availability.findByPk(id)
  
  if(AvailabilityId === null) return res.status(400).json({ message: 'AvailabilityId not found' })

  return res.json( {
    data: AvailabilityId,
    message: "Availability data successfully"
  })
} catch (error) {
  return res.status(500).json({
    message: error.message
  })
}


}
export const createAvailabilities = async (req, res) => {
 try {
  const { date, start_time, end_time, idDoctor } = req.body
  const Availabilities = await Availability.create({ date, start_time, end_time, idDoctor })

  res.json({
    data: Availabilities,
    message: "Availability created successfully"
  })

 } catch (error) {
  res.status(500).json({
    message: error.message
  })
 }
  
  
}
export const updateAvailabilities = (req, res) => {

}
export const deleteAvailabilities = (req, res) => {

}