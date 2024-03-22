import chalk from "chalk";
import config from "config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  config.get("DB_NAME"),
  config.get("DB_USER"),
  config.get("DB_PASSWORD"),
  {
    host: config.get("DB_HOST"),
    dialect: "postgres"
  }
);

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
