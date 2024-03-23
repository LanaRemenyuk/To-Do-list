import routes from "./routes/index.js";
// utils
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

const corsOptions = {
  origin: [
    "https://bee-jee-gamma.vercel.app/",
    "https://bee-jee-xi.vercel.app/",
    "https://bee-jee-client.vercel.app/",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization"
  ],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

server.listen(PORT, () =>
  console.log(chalk.green(`Server has been started on port ${PORT}`))
);

postgreConnection();
