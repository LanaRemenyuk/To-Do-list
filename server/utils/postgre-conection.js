import chalk from "chalk";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres"
});

const postgreConnection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log(chalk.red("PostgreSQL connected"));
      return sequelize.sync();
    })
    .then(() => {
      console.log(chalk.green("Models synchronized with the database"));
    })
    .catch((err) => {
      console.error(chalk.red("Unable to connect to the DB PostgreSQL:"), err);
    });
};

export default postgreConnection;
