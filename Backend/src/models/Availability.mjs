import { DataTypes, UUIDV4 } from 'sequelize'
import sequelize from '../database/startDb.mjs'
import Doctor from './Doctor.mjs'

const Availability = sequelize.define('availabity', {
  idAvailabity: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
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
  }
}, {
  indexes: [{
    unique: true,
    name: 'unique_availability',
    fields: ['idDoctor', 'date', 'start_time', 'end_time']
  }]
})

Availability.belongsTo(Doctor, {
  foreignKey: {
    name: 'idDoctor',
    allowNull: false
  },
  as: 'doctors'
})

export default Availability