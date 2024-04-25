import { DataTypes } from "sequelize";
import Doctor from "./Doctor.mjs";
import sequelize from "../database/startDb.mjs";

const Availability = sequelize.define(
  "availability",
  {
    idAvailability: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    idDoctor: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "available",
    },
  },
  {
    indexes: [
      {
        unique: true,
        name: "unique_availability",
        fields: ["idDoctor", "date", "start_time", "end_time"],
      },
    ],
  }
);

Doctor.hasMany(Availability, {
  foreignKey: "idDoctor",
  as: "available",
});

Availability.belongsTo(Doctor, {
  foreignKey: "idDoctor",
  as: "doctor",
});

export default Availability;
