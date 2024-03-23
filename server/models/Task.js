import { DataTypes } from "sequelize";
import { sequelize } from "../utils/postgre-conection.js";

const Task = sequelize.define(
  "Task",
  {
    _id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userName: { type: DataTypes.STRING, defaultValue: null },
    userEmail: { type: DataTypes.STRING, defaultValue: null },
    text: { type: DataTypes.STRING, defaultValue: null },
    isDone: { type: DataTypes.BOOLEAN, defaultValue: false },
    isAdminUpdated: { type: DataTypes.BOOLEAN, defaultValue: false },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    timestamps: false,
    tableName: "tasks"
  }
);

export default Task;
