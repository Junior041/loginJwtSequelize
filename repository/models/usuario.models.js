import { DataTypes } from "sequelize";
import connectToDatabase from "../db/db.js";
const conn = await connectToDatabase()
const Usuario = conn.define("usuario", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default Usuario;
