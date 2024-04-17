import { DataTypes } from 'sequelize'
import sequelize from '../database/startDb.mjs'

const Availability = sequelize.define('availability', {
  idAvailability: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  idDoctor: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  indexes: [{
    unique: true,
    name: 'unique_availability',
    fields: ['idDoctor', 'date', 'start_time', 'end_time']
  }]
})


export default Availability