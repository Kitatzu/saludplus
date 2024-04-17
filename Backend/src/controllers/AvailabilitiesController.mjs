import Availability from "../models/Availability.mjs"
import Doctor from "../models/Doctor.mjs"

export const getAllAvailability = async (req, res) => {
  try {
    const availability = await Availability.findAll()

    if (availability.length === 0) {
      return res.status(404).json({ message: 'data availability not found' })
    }
    return res.json({
      data: availability,
      message: 'Availability data successfully'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
export const getAvailabilityById = async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params
    const availabilityId = await Availability.findByPk(id)

    if (availabilityId === null) return res.status(400).json({ message: 'Availability not found' })

    return res.json({
      data: availabilityId,
      message: "Availability data successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }


}
export const createAvailability = async (req, res) => {
  try {
    const { date, start_time, end_time, idDoctor } = req.body
    const availability = await Availability.create({ date, start_time, end_time, idDoctor })

    res.json({
      data: availability,
      message: "Availability created successfully"
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
export const updateAvailability = async (req, res) => {
  try {
    const idAvailability = req.params.id
    const { date, start_time, end_time, idDoctor } = req.body

    const availabilityById = await Availability.findByPk(idAvailability)
    if (availabilityById === null) return res.status(400).json({ message: 'Availability not found' })

    const availability = await Availability.update({ date, start_time, end_time, idDoctor },
      { where: { idAvailability } })
    if (availability === null) return res.status(400).json({ message: 'Availability not found' })

    return res.json({
      message: 'availability update successfully'
    })


  } catch (error) {
    return res.status(500).json({ message: error.message })

  }

}
export const deleteAvailability = async (req, res) => {
  try {
    const idAvailability = req.params.id;
    const availability = await Availability.findByPk(idAvailability);

    if (availability === null) return res.status(400).json({ message: 'Availability not found' })

    await availability.destroy();

    res.json({
      message: "Availability deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}