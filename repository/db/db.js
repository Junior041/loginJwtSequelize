import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config()
export default async function connectToDatabase() {
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
  });
  try {
    return sequelize
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
