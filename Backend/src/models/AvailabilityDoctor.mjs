import Doctor from "./Doctor.mjs"
import Availability from "./Availability.mjs"

Doctor.hasMany(Availability, {
  foreignKey: 'idDoctor',
  as: 'Availabilities'
})

Availability.belongsTo(Doctor, {
  foreignKey: 'idDoctor',
  as: 'doctor'
})

export { Doctor, Availability }