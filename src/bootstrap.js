import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import methodOverride from "method-override";
import path from "path";
import model from "./models/index.js";
import routes from "./routes/index.js";
const redis = require("redis");
let redisClient;
export default class Bootstrap {
  constructor(app) {
    this.app = app;
    this.middleware();
    this.connectDB();
    this.routes();
    this.redis();
    this.start();
  }
  middleware() {
    const { app } = this;
    app.use(cors());
    app.use(compression());
    app.use(methodOverride());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, "public")));
  }
  connectDB() {
    const { sequelize } = model;
    sequelize
      .authenticate()
      .then((res) => {
        sequelize
          .sync()
          .then(() => {
            console.log("DB connected");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  redis() {
    redisClient = redis.createClient();
    redisClient.on("error", (error) => console.log(`Error : ${error}`));
    redisClient.connect().then(() => {
      console.log("Connected to Redis Server Successfully");
    });
  }

  routes() {
    routes(this.app);
  }
  start() {
    const { app } = this;
    const port = app.get("port");
    const server = app.listen(port || 5151, () => {
      console.log("listening at " + port);
    });
  }
}
export { redisClient };

