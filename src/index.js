import dotenv from "dotenv";
import express from "express";
import Bootstrap from "./bootstrap.js";
dotenv.config();
const app = express();
app.set("port", process.env.PORT || 5151);
const bootstrap = new Bootstrap(app);
