import { DataTypes, UUIDV4 } from 'sequelize'
import sequelize from '../database/startDb.mjs'

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
})

export default Availability