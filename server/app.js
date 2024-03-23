import routes from "./routes/index.js";
// utils
import { corsOptions } from "./utils/cors-options.js";
import postgreConnection from "./utils/postgre-conection.js";
// modules
import express from "express";
import config from "config";
import chalk from "chalk";
import cors from "cors";
import https from "https";

const PORT = config.get("port") ?? 8080;

const app = express();

const server = https.createServer(app);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://bee-jee-client.vercel.app/"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

server.listen(PORT, () =>
  console.log(chalk.green(`Server has been started on port ${PORT}`))
);

postgreConnection();
